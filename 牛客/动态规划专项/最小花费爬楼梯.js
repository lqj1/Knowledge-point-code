/**
 * 描述
给定一个整数数组 cost，其中 cost[i] 是从楼梯第i个台阶向上爬需要支付的费用，
下标从0开始。一旦你支付此费用，即可选择向上爬一个或者两个台阶。
你可以选择从下标为 0 或下标为 1 的台阶开始爬楼梯。
请你计算并返回达到楼梯顶部的最低花费。
示例1
输入：
3
2 5 20
输出：
5
说明：
你将从下标为1的台阶开始，支付5 ，向上爬两个台阶，到达楼梯顶部。总花费为5 

示例2
输入：
10
1 100 1 1 1 90 1 1 80 1
输出：
6
说明：

你将从下标为 0 的台阶开始。
  1.支付 1 ，向上爬两个台阶，到达下标为 2 的台阶。
  2.支付 1 ，向上爬两个台阶，到达下标为 4 的台阶。
  3.支付 1 ，向上爬两个台阶，到达下标为 6 的台阶。
  4.支付 1 ，向上爬一个台阶，到达下标为 7 的台阶。
  5.支付 1 ，向上爬两个台阶，到达下标为 9 的台阶。
  6.支付 1 ，向上爬一个台阶，到达楼梯顶部。
  总花费为 6 。     
 */