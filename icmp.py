from scapy.all import *
from scapy.all import IP
from scapy.all import ICMP
import sys

def ping(ip):
    sr1(IP(dst=ip)/ICMP())

if __name__=="__main__":
    ping(sys.argv[1])
