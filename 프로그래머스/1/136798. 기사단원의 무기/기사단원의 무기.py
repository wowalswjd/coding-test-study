import math

def solution(number, limit, power):
    answer = 0
    
    # 약수 구하기 - 약수는 대칭 형태이므로 제곱수까지만 구하기
    yaksu=[]
    for i in range(1, number+1):
        cnt=0
        for j in range(1, int(math.sqrt(i))+1):
            if i % j ==0:
                if j==i//j: # 제곱수일 경우 한 번만 카운트
                    cnt+=1
                    continue
                cnt+=2
        yaksu.append(cnt)
    
    for ys in yaksu:
        if ys > limit:
            answer += power
        else:
            answer+=ys
        
    return answer