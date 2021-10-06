def getMaxWaterContainer(heights):
    maxArea = 0
    for p1 in range(len(heights)):
        # print(p1)
        for p2 in range(p1+1, len(heights)):
            # print(p1,p2)
            height = min(heights[p1],heights[p2])
            width = p2 - p1
            area = height * width
            maxArea = max(maxArea, area)

    return maxArea




heights = [7,1,2,3,9] 

print(getMaxWaterContainer(heights))