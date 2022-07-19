from parsel import Selector
import requests


# exemple 01
# try:
#     response = requests.get("http://httpbin.org/delay/10", timeout=5)
# except requests.Timeout:
#     response = requests.get("http://httpbin.org/delay/1", timeout=3)
# finally:
#     print(response.status_code)

# exemple 02
# response = requests.get("http://books.toscrape.com/")
# selector = Selector(text=response.text)
# titles = selector.css(".product_pod h3 a::attr(title)").getall()
# prices = selector.css(".product_price .price_color::text").getall()

# for product in selector.css(".product_pod"):
#     title = product.css("h3 a::attr(title)").get()
#     price = product.css(".price_color::text").get()
#     print([title, price])

# exemple 03
# URL_BASE = "http://books.toscrape.com/catalogue/"
# next_page_url = "page-1.html"
# while next_page_url:
#     response = requests.get(URL_BASE + next_page_url)
#     selector = Selector(text=response.text)

#     for product in selector.css(".product_pod"):
#         detail_href = product.css("h3 a::attr(href)").get()
#         detail_page_url = URL_BASE + detail_href
#         detail_response = requests.get(detail_page_url)
#         title = product.css("h3 a::attr(title)").get()
#         price = product.css(".price_color::text").get()
#         detail_selector = Selector(text=detail_response.text)
#         description = detail_selector.css(
#             "#product_description ~ p::text"
#         ).get()
#         print([title, price, description])

#     next_page_url = selector.css(".next a::attr(href)").get()

# exemple 04
URL_BASE = "http://books.toscrape.com/catalogue/"

next_page_url = "page-1.html"
while next_page_url:
    response = requests.get(URL_BASE + next_page_url)
    selector = Selector(text=response.text)
    for product in selector.css(".product_pod"):
        title = product.css("h3 a::attr(title)").get()
        price = product.css(".product_price .price_color::text").re(
            r"\d+\.\d{2}"
        )
        print(title, price)

        detail_href = product.css("h3 a::attr(href)").get()
        detail_page_url = URL_BASE + detail_href

        detail_response = requests.get(detail_page_url)
        detail_selector = Selector(text=detail_response.text)

        description = detail_selector.css(
            "#product_description ~ p::text"
        ).get()
        suffix = "...more"
        if description.endswith(suffix):
            description = description[: -len(suffix)]
        # print(description)

    next_page_url = selector.css(".next a::attr(href)").get()
