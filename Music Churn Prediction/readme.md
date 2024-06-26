# Music Churn Prediction

## Abstract
A subscription-based business model is widely used by music streaming companies to understand client retention and reduce customer churn. This project analyzes churn rates to help companies identify actions to prevent revenue loss due to customer churn. Churn rate is the frequency with which clients leave a business over a predetermined time frame. By understanding churn, companies can better assess the success of their marketing initiatives and overall client satisfaction. This analysis focuses on a fictional music streaming service, Sparkify, to identify users prone to downgrading or canceling their subscriptions.

## Background
Sparkify offers both free and paid memberships, where free users hear advertisements and paying users do not. Users can:
1. Upgrade from free to paid.
2. Downgrade from paid to free.
3. Delete their account and stop using the service.

Our goal is to identify users who might delete their accounts to offer incentives for retention.

## System Design Architecture
We implemented an end-to-end data pipeline:
1. **Kafka Streaming:** Streams data from a log file to the Kafka cluster.
2. **Spark Streaming:** Consumes the stream message, ingests it to local storage, and performs churn prediction analysis.

### Why Big Data?
The log data generated by Sparkify is massive, requiring big data technologies like Kafka and Spark to efficiently process and make churn predictions.

### Why Kafka?
Kafka is reliable for loading real-time user log data with low latency and is massively scalable.

### Why Spark?
Spark's ML libraries handle and process large amounts of data in real-time, making it ideal for churn prediction.

## Dataset (Schema)
The dataset is a JSON file with 26,259,199 records (12 GB storage), containing columns like `artist`, `auth`, `firstName`, `gender`, `itemInSession`, `lastName`, `length`, `level`, `location`, `method`, `page`, `registration`, `sessionId`, `song`, `status`, `ts`, `userAgent`, and `userId`.

## Data Investigation
- **Load Data:** Using PySpark to load and process data.
- **Session Tracking:** Removing guest and logged-out users.
- **User ID Check:** Ensuring records have user IDs.
- **Feature Creation:** Building new features using timestamp and page analysis.

## Data Visualization
Analyzing various aspects like:
- **Gender Count:** More male users than female.
- **Unique User Sessions:** Counting unique sessions per user.
- **User Level (Free vs. Paid):** Distribution of free and paid users.
- **Local Analysis (State):** User base distribution across states.
- **Page Count Analysis:** Most accessed pages by users.
- **User Device Analysis:** Popular browsers among users.
- **User Analysis (Day & Time):** User activity patterns.

## Effect of Each Feature on Churn
Analyzing how different features like location, page events, and user sessions affect churn.

## Feature Engineering
Creating new features from raw data to improve the predictive capacity of machine learning algorithms.

## Data Modeling
We used several models for churn prediction:
- **Decision Tree Classifier**
- **Gradient Boosting Trees**
- **Random Forest**
- **Logistic Regression**

### Results
Machine learning models successfully predicted customer churn, with the Gradient Boosting Trees algorithm showing promising results. Future improvements include increasing dataset size, tuning parameters, and analyzing location-based and environment-specific churn factors.

## Conclusion
The project enabled us to study the service dataset, create predictive features, and train models like Logistic Regression, Random Forest, Gradient Boosted Trees, and Decision Tree Classifier. The model can be run weekly or monthly based on business requirements, with operational costs tracked and results validated through testing.

## Acknowledgements
Special thanks to Professor Juan Rodriguez and the teaching assistants for their guidance and support throughout the project.

## References
1. [Analytics Vidhya - Customer Churn Prediction](https://www.analyticsvidhya.com/blog/2022/06/customer-churn-prediction-using-mlib/)
2. [Towards AI - Churn Prediction Model Using Spark](https://pub.towardsai.net/this-is-how-you-can-build-a-churn-prediction-model-using-spark-e187b7eca339)
3. [Kaggle - Customer Churn Prediction with PySpark](https://www.kaggle.com/code/mnassrib/customer-churn-prediction-with-pyspark)
4. [Streamthoughts - Streaming Data into Kafka](https://medium.com/streamthoughts/streaming-data-into-kafka-s01-e04-parsing-log-files-using-grok-expressions-c282d54b3e3f)
5. [Medium - Apache Kafka Installation on Mac](https://medium.com/@Ankitthakur/apache-kafka-installation-on-mac-using-homebrew-a367cdefd273)
6. [Udacity - Sparkify Event Data](https://udacity-dsnd.s3.amazonaws.com/sparkify/sparkify_event_data.json)
