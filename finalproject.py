import random
def getrandom():
    regen=1
    while(regen==1):
        rr=input("""
        Roll-R
        Quit-Q
        """)
        if(rr=="r" or "R"):
            a=random.choice('0123456789ABCDEF')
            b=random.choice('0123456789ABCDEF')
            c=random.choice('0123456789ABCDEF')
            d=random.choice('0123456789ABCDEF')
            e=random.choice('0123456789ABCDEF')
            f=random.choice('0123456789ABCDEF')
            print(a+b+c+d+e+f)

            hex="#"+a+b+c+d+e+f
            return hex
        elif(rr=="q" or "Q"):
            regen = regen - 1
      
