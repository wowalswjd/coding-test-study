def solution(n):
    answer = 1 # 2는 먼저 포함시킴
    
    for i in range(2, n+1): # 숫자들 나열
        sqrt=round((i)**0.5)
        for j in range(2, sqrt+1):
            if i % j == 0: # 나눠지면 제외
                break
            if j == sqrt: # 마지막 반복에도 제외되지 않으면
                answer += 1
            
    return answer