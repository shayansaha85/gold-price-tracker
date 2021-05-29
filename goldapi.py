import requests

apikey = "rr6wvwhhxf700hgf988c6gntqopdclu1o35lq5qxdawenxd2vl4ze40u4phz"
currency = "INR"
link = f"https://metals-api.com/api/latest?access_key={apikey}&base={currency}&symbols=XAU"
grams = 28.3495
response = requests.get(link)
r = response.json()

rate = r["rates"]['XAU']/grams

priceINR = round(rate,2)

print(f"PRICE OF GOLD = {priceINR} per gram")
file = open("link.txt", "w")
file.write(link)
file.close()