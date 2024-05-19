import requests
from bs4 import BeautifulSoup
import csv

def scrape(url, element_class):
    try:
        response = requests.get(url)
        response.raise_for_status()  
    except requests.exceptions.RequestException as e:
        print(f"Error fetching the URL: {e}")
        return

    soup = BeautifulSoup(response.text, 'html.parser')

    data = []

   
    items = soup.find_all(class_=element_class)
    if not items:
        print(f"No items found with class '{element_class}'")
        return

    for item in items:
        title = item.find('h2').get_text() if item.find('h2') else 'No title'
        description = item.find('p').get_text() if item.find('p') else 'No description'
        data.append({'title': title, 'description': description})

    if not data:
        print("No data to write to CSV.")
        return

    try:
        with open('data.csv', 'w', newline='', encoding='utf-8') as csvfile:
            fieldnames = ['title', 'description']
            writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
            writer.writeheader()
            writer.writerows(data)
        print('Data saved to data.csv')
    except Exception as e:
        print(f"Error saving to CSV: {e}")

if __name__ == "__main__":
    url = input("Enter the URL to scrape: ")
    element_class = input("Enter the class of elements to extract: ")
    scrape(url, element_class)
