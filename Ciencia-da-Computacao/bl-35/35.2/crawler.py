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
response = requests.get("http://books.toscrape.com/")
selector = Selector(text=response.text)
titles = selector.css(".product_pod h3 a::attr(title)").getall()
prices = selector.css(".product_price .price_color::text").getall()

for product in selector.css(".product_pod"):
    title = product.css("h3 a::attr(title)").get()
    price = product.css(".price_color::text").get()
    print([title, price])
