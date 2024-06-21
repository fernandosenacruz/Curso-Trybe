from parsel import Selector
import requests


# exercise 01
# BASE_URL = "https://httpbin.org/encoding/utf8"

# response = requests.get(BASE_URL)
# selector = Selector(text=response.text)
# content = selector.css("pre::text").getall()

# print(content)

# exercise 02
# BASE_URL = "https://api.github.com/users"
# response = requests.get(BASE_URL)
# users = response.json()

# for user in users:
#     print({user["login"], user["url"]})

# exercise 03
# BASE_URL = "https://scrapethissite.com/pages/advanced/?gotcha=headers"

# response = requests.get(
#     BASE_URL,
#     headers={"User-agent": "Mozilla", "Accept": "text/html"},
# )

# assert "bot detected" not in response.text

# exercise 04
BASE_URL = "http://books.toscrape.com/catalogue/"
response = requests.get(BASE_URL + "the-grand-design_405/index.html")
selector = Selector(text=response.text)

title = selector.css("h1::text").get()
price = selector.css(".product_main > .price_color::text").re_first(
    r"\d*\.\d{2}"
)

description = selector.css("#product_description ~ p::text").get()
suffix = "...more"
if description.endswith(suffix):
    description = description[: -len(suffix)]

url_img = BASE_URL + selector.css("#product_gallery img::attr(src)").get()
quantity = selector.css(".product_main .instock").re_first(r"\d+")
print([title, price, description, url_img, quantity])
