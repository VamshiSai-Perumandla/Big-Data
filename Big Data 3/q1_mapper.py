
import sys
import re
from random import randint

k_value = int(sys.argv[1])
def main(separator='\t'):
    counter = 1
    for line in sys.stdin:
        lines = re.split(r'\.', line)
        for input_text in lines:
            input_text = input_text.strip()
            if input_text:
                if counter <= k_value:
                    print('%d%s%s' %(counter,separator,input_text))
                else:
                    random_val = randint(1,counter)
                    if random_val <= k_value:
                        print('%d%s%s' %(random_val,separator,input_text))
                counter += 1

if __name__ == "__main__":
    main()
