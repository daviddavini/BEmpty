from ipaddress import collapse_addresses
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By

from selenium.common.exceptions import NoSuchElementException

from urllib.parse import urlencode

import json
import re
import os

import pandas as pd


def text_between_first_parens(s):
    res = re.search('\(.*?\)', s).group()
    # exclude initial parenthesis (closing parenthesis already excluded)
    return res[1:]


def remove_first_last_parens(s):
    return s[s.find("(")+1:s.rfind(")")]


def main():
    driver = webdriver.Chrome(os.getcwd() + "/chromedriver")


    scrape_menu(driver)


def scrape_menu(driver):

    courses_output_path = 'data_courses.csv'
    classrooms_output_path = 'data_classrooms.csv'

    assert not os.path.exists(courses_output_path), "file already exists"
    assert not os.path.exists(classrooms_output_path), "file already exists"

    URL = "https://sa.ucla.edu/RO/Public/SOC/Search/ClassroomGridSearch"
    driver.get(URL)

    # document.querySelector("#block-mainpagecontent > div > div > div > div > ucla-sa-soc-app").shadowRoot.querySelector("#classroom_autocomplete")
    # .shadowRoot.querySelector("#dropdownitems")
    # .shadowRoot.querySelector("#option-0")

    app = driver.find_element(
        By.CSS_SELECTOR, "#block-mainpagecontent > div > div > div > div > ucla-sa-soc-app")

    app_shadow = app.shadow_root

    dropdown = app_shadow.find_element(
        By.CSS_SELECTOR, "#classroom_autocomplete")

    options_text = dropdown.get_attribute("options")

    classrooms = json.loads(options_text)

    df_classrooms = pd.DataFrame(classrooms)
    df_classrooms.to_csv(classrooms_output_path, mode='a', index=False,
                         header=True)

    needs_headers = True

    for i, classroom in enumerate(classrooms):

        print(f"Scraping classroom {i}: {classroom['text']}")

        # ?term=22S&classroom=BIO+SCI+%7C++00383++
        params = {
            'term': '22S',
            'classroom': classroom['value']
        }

        URL_BASE = "https://sa.ucla.edu/ro/Public/SOC/Results/ClassroomDetail?"

        URL = URL_BASE + urlencode(params)

        courses = scrape_classroom(URL, driver)

        if courses != None:

            df_courses = pd.DataFrame(courses)

            # print(df)

            # df.insert(loc=0, column='classroom text', value=classroom['text'])
            # df.insert(loc=1, column='classroom index', value=i)

            df_courses.to_csv(courses_output_path, mode='a', index=False,
                              header=needs_headers)

            # Only add headers the first time
            needs_headers = False

    # return data


keys = None


def scrape_classroom(URL, driver):
    global keys

    try:

        driver.get(URL)

        app = driver.find_element(
            By.CSS_SELECTOR, "#block-mainpagecontent > div > div > div > div > ucla-sa-soc-app")

        shadow = app.shadow_root

        script = shadow.find_element(
            By.CSS_SELECTOR, "#divContent > script:nth-child(4)")

        script_text = script.get_attribute('innerHTML')

        # createFullCalendar_call_text = text_between_first_parens(script_text)

        # parseJSON_call_text = text_between_first_parens(
        #     createFullCalendar_call_text)

        first_line = script_text.strip().split('\n')[0]

        parseJSON_call_text = remove_first_last_parens(
            remove_first_last_parens(first_line))

        courses = json.loads(parseJSON_call_text[1:-1])

        # Check that the keys stay the same
        for course in courses:
            course_keys = sorted(list(course.keys()))
            if keys is None:
                keys = course_keys
            else:
                assert keys == course_keys

        # print(len(courses))

    except NoSuchElementException:

        courses = None
        # print("no courses")

    return courses

    # json.dump(classes, open("test.json", "w"), indent=4)


# .shadowRoot.querySelector("#divContent > script:nth-child(4)")


# def select_shadow_element_by_css_selector(selector):
#     running_script = 'return document.querySelector("%s").shadowRoot' % selector
#     element = driver.execute_script(running_script)
#     return element


# def expand_shadow_element(element):
#     shadow_root = driver.execute_script(
#         'return arguments[0].shadowRoot', element)
#     return shadow_root


# shadow = expand_shadow_element(app)

# shadow

# app.shadow_root.find_element(
#     By.CSS_SELECTOR, "#divContent > script:nth-child(4)").get_attribute('innerHTML')


pass

if __name__ == "__main__":
    main()
