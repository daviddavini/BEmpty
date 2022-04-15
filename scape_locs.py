from ipaddress import collapse_addresses
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.common.exceptions import TimeoutException
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

from selenium.common.exceptions import NoSuchElementException

from urllib.parse import urlencode

import json
import re
import os

import pandas as pd
import time


def safe_selector(driver, selector):
    timeout = 3

    element_present = EC.element_to_be_clickable(
        (By.CSS_SELECTOR, selector))
    # WAIT FOR PAGE TO LOAD
    WebDriverWait(driver, timeout).until(element_present)
    el = driver.find_element(By.CSS_SELECTOR, selector)
    # IDK why, but this prevents errors
    el = driver.find_element(By.CSS_SELECTOR, selector)
    return el


def scrape_buildings(driver, building_values):

    buildings_output_path = 'buildings.csv'

    assert not os.path.exists(buildings_output_path), "file already exists"

    URL = "https://map.ucla.edu/"

    for building_value in building_values:

        driver.get(URL)

        search_box = driver.find_element(by=By.ID, value="searchBox")

        search_box.send_keys(building_value)

        suggestion_span = safe_selector(
            driver, "#searchSuggestion > ul > li > span")
        suggestion_span.click()

        loc_link = safe_selector(
            driver, "#map > div.leaflet-pane.leaflet-map-pane > div.leaflet-pane.leaflet-popup-pane > div > div.leaflet-popup-content-wrapper > div > div > div > div.popup-link-left > a")
        loc_link.click()

        # fullname = safe_selector(
        #     driver, "body > div.reveal-modal.fade.in > div > div.modal-content.ng-scope > section:nth-child(2) > h1")

        # address = safe_selector(
        #     driver, "body > div.reveal-modal.fade.in > div > div.modal-content.ng-scope > section:nth-child(2) > div > address > ul > li:nth-child(1) > span")

        coor_link = safe_selector(
            driver, "body > div.reveal-modal.fade.in > div > div.modal-content.ng-scope > section:nth-child(2) > div > address > ul > li:nth-child(2) > span > a")

        print(building_value, coor_link.text)

        # search_box.clear()


def main():
    driver = webdriver.Chrome(os.getcwd() + "/chromedriver")

    data_classrooms = pd.read_csv("data_classrooms.csv")

    building_values = list(
        data_classrooms["value"].apply(lambda x: x.split("|")[0]))

    scrape_buildings(driver, building_values)


if __name__ == "__main__":
    main()
