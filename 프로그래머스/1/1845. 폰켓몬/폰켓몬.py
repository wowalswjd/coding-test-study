def solution(nums):
    set_nums=list(set(nums)) # 중복 제거
    if (len(set_nums)>=len(nums)/2):
        return len(nums)/2
    else:
        return len(set_nums)