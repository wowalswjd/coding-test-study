from collections import deque
n, k= map(int, input().split())

def solution(n, k):
    answer=[]
    deq=deque([i+1 for i in range(n)])
    while len(deq) != 0:
        deq.rotate(-(k-1))
        answer.append(str(deq.popleft()))
    return answer

result=solution(n, k)
print("<", end="")
print(", ".join(result), end="")
print(">")