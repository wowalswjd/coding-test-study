import itertools

def isSosu(n):
    for i in range(2, round(n**0.5)+1):
        if n % i == 0:
            return False
    return True

def solution(nums):
    answer = 0
    combination = list(itertools.combinations(nums,3))
    
    for comb in combination:
        if isSosu(sum(comb))== True:
            answer+=1
    
    return answer