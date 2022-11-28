// 时间复杂度O(log n)
// 目标数值 target
function searching(target) {
    // start,end middle均为下标,element是筛选数值
    var start = 0,
        end = arr.length - 1,
        middle, element;
    while (start <= end) {
        // 获取中间位置下标,数值
        middle = Math.floor((start + end) / 2);
        element = arr[middle];
        // 若中间位置是目标值
        if (element === target) {
            return middle;
        }
        // 目标数比中间元素小，寻找中间元素左边的元素,前一位
        else if (target < element) {
            end = middle - 1;
        } else {
            end = middle + 1;
        }
    }
}