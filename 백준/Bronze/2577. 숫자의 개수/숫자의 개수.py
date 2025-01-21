A=int(input())
B=int(input())
C=int(input())

mul=A*B*C
mulArr=list(str(mul))

for i in range(10):
    print(mulArr.count(str(i)))