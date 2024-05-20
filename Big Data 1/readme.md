# Hadoop Assignment 1

## Abstract

This assignment demonstrates proficiency in using HDFS and writing a MapReduce program. It involves submitting tasks to Hadoop and retrieving results from HDFS.

## Submission Instructions

Submit your homework as a zip file, with your name in the filename, e.g., `hw1-vp2361.zip`.

## Task Breakdown

### 1. Hadoop Command Line HDFS (15 points)

For each task, submit a screenshot or suitable capture (e.g., a picture in jpg or another suitable format):

1. **Hadoop Version:** 
   - Login to Dataproc or Hadoop cluster and find the Hadoop version using `$hadoop version`.
   - **Screenshot:**

2. **Create Directory:**
   - Create a new directory path as `hw1-<netid>/input` (replace `<netid>` with your netID). For example, `hw1-jcr365/input`.
   - **Screenshot:**

3. **Copy Homework Input Files:**
   - Extract and copy the homework input files to HDFS in the `input` directory created in part b.
   - **Screenshot:**

### 2. MapReduce (65 Points)

Modify the MapReduce WordCount code from class (Java or Python) to compute n-grams counts.

1. **1-gram Count (5 points)**
   - Output n-gram count for n=1 (single words).
   
2. **2-gram Count (30 points)**
   - Output n-gram count for n=2 (bigrams).
   
3. **3-gram Count (30 points)**
   - Output n-gram counts for n=3 (trigrams).

**Requirements:**
- All text should be lowercase.
- Punctuation does not count; words like ‘(1991)’ and ‘1991’ are the same.
- Parse and remove/replace with space all characters not in this set: `[a-z0-9]`.
- Skip lines with fewer words than the specified n.

**Example:**
For the sentence “Extract and (copy) the input from the”:
- 1-grams: `extract,1 and,1 copy,1 the,2 input,1 from,1`
- 2-grams: `extract and,1 and copy,1 copy the,1 the input,1 input from,1 from the,1`

**Input File:** `hw1.txt` (provided in Brightspace)

### 3. Extra Points (20 points)

Each line in the input data is of the form: `DocumentID Text`.

Text includes paragraph formatting commands of the form `<x>` (e.g., `<p>`, `<h>`).

**Task:**
Repeat the bigrams in part 2, but parse the input lines to only include the text portion, removing all formatting commands of the form `<x>`.

**Example:**
For a line of text: `@@4004141 Guest Editors <p> There can only be disaster arising from unawareness of the causalities…`

Processed line should be: `guest editors there can only be disaster arising from unawareness of the causalities…`

## Directory Structure

hw1-<netid>/
    ├── input/
    │   └── hw1.txt
    ├── output/
    ├── screenshots/
    │   └── hadoop_version.jpg
    │   └── create_directory.jpg
    │   └── copy_files.jpg
    ├── src/
    │   └── WordCount.java (or WordCount.py)
    │   └── NGramCount.java (or NGramCount.py)
    ├── README.md


## How to Run

1. **Compile (for Java):**
   ```sh
   javac -cp $(hadoop classpath) -d . WordCount.java
   javac -cp $(hadoop classpath) -d . NGramCount.java
   
2. **Run (for Java):**
   ```sh
   hadoop jar WordCount.jar WordCount input output
   hadoop jar NGramCount.jar NGramCount input output 2

3. **Run (for Python):**
   ```sh
   hadoop jar /usr/lib/hadoop/hadoop-streaming.jar -input input -output output -mapper mapper.py -reducer reducer.py

## Results

Check the output directory for results. Ensure the output matches the expected n-gram counts as specified.
