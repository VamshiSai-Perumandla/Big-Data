#!/usr/bin/env python
"""An advanced Mapper, using Python iterators and generators."""

import sys
import re

def read_input(input):
    for line in input:
        # split the line into words; keep returning each word
        line1 = line.lower()
        line1 = re.sub("@@[0-9]+"," ",line1)
        line1 = re.sub("\<[a-z]\>"," ",line1)
        line2 = re.sub('[^a-z0-9]', ' ', line1)
        line3 = line2.split()
        yield line3


def main(separator=','):
    # input comes from STDIN (standard input)
    data = read_input(sys.stdin)
    for words in data:
        # write the results to STDOUT (standard output);
        # what we output here will be the input for the
        # Reduce step, i.e. the input for reducer.py
        #
        # tab-delimited; the trivial word count is 1
        N=2
        for i in range(len(words)-N+1):
            print('%s%s%d' % (words[i]+" "+words[i+1], separator, 1))


# how to test locally in bash/linus: cat <input> | python mapper.py
if __name__ == "__main__":
    global data_len
    main()
