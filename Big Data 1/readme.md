Store your input file in the hw1-`<net_id>`{=html}/input directory After
you have successfully stored the file Upload or copyFromLocal the
necessary python files (i.e, your\_mapper.py and your\_reducer.py) In
this case , the mapper file for computing the unigrams is
unigrams\_mapper.py , mapper file for computing the bigrams is
bigrams\_mapper.py , mapper file for computing the trigrams is
trigrams\_mapper.py the reducer python file is red.py

To compute, the command to be used is:

mapred streaming -input hw1-vp2361/input/your\_input\_file.txt -output
hw1-vp2361/output/your\_output -mapper "your\_mapper.py" -reducer
"python your\_reducer.py" -file your\_mapper.py -file your\_reducer.py

After getting the output successfully , merge the output files

To merge , use the command

hdfs dfs -getmerge hw1-vp2361/your\_output
hw1-vp2361/your\_outputfile.txt

After merging the output files, copy it locally (use the copyToLocal
command)
