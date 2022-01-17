# Google Sheets x Web Scrapper

## Meetup.com

To get Meetup's City:
- `=IMPORTXML(A2,"//a[@class='groupHomeHeaderInfo-cityLink']")`
- xpath_query = `//a[@class='groupHomeHeaderInfo-cityLink']`

<!-- To get Upcoming Event count:
- xpath_query = `//a[@class='groupHome-eventsList-upcomingEventsTitle']`
- `=IMPORTXML(A2,"//a[@class='groupHome-eventsList-upcomingEventsTitle']")` -->


`=TRANSPOSE(IMPORTXML(A2,"//h3"))` <-- Working!


To get Upcoming Event Count:
=VALUE(REGEXREPLACE(IMPORTXML(A2,"//h3"),"[^[:digit:]]", ""))

IF(logical_expression, value_if_true, value_if_false)

=IF(IMPORTXML(A2,"//h3") = "Past Events", "A2 is foo", "A2 is not foo")


$x("//a[@class='groupHomeHeaderInfo-memberLink']".InnerText)

$x("//h3[@class='groupHome-eventsList-upcomingEventsTitle']")
$x("//h3")

//*[@id="mupMain"]/div[4]/div/div/div/div[1]/section[2]/div[1]/div[1]/h3

/html/body/div[1]/div/div[3]/div[2]/div[3]/main/div[4]/div/div/div/div[1]/section[2]/div[1]/div[1]/h3


## Resources
- [x] [Use Google Sheets’ ImportXML function to display data in Geckoboard](https://support.geckoboard.com/hc/en-us/articles/207238327)
- [] [Automatically refresh your Google Sheets data daily with Supermetrics](https://support.geckoboard.com/hc/en-us/articles/360007389898-Automatically-refresh-your-Google-Sheets-data-daily-with-Supermetrics)
- [] [Use Google Sheets’ ImportData function to display online data in Geckoboard](https://support.geckoboard.com/hc/en-us/articles/216438097-Use-Google-Sheets-ImportData-function-to-display-online-data-in-Geckoboard)
- [] [Use Google Sheets’ ImportRange function to display data in Geckoboard](https://support.geckoboard.com/hc/en-us/articles/360007400057-Use-Google-Sheets-ImportRange-function-to-display-data-in-Geckoboard)
- [] [Use Google Sheets’ ImportHTML function to display data in Geckoboard](https://support.geckoboard.com/hc/en-us/articles/206260188-Use-Google-Sheets-ImportHTML-function-to-display-data-in-Geckoboard)