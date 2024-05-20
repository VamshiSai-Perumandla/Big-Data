
import sys, random

k_value = int(sys.argv[1])
L = ["" for i in range(k)]
count_val = 0
for line in sys.stdin:
	line = line.strip()
	if(line):
		line_val = line.split("\t",1)[1]
		if line_val:
			count_val+=1
			random_val = random.randint(1,count_val)
			if(count_val<=k_value):
				L[count_val-1]=line_val
			else:
				if(random_val<=k_value):
					L[random_val-1]=line_val

for i in range(len(L)):
	new_val = i+1
	print("%d\t%s\n\n" %(new_val,str(L[i])))
