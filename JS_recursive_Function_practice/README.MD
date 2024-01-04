# RECURSIVE FUNCTION
- A recursive function is a function that calls itself during its execution.

- A recursive function typically has two main components:

`Base Case(s):` These are the conditions under which the function stops calling itself and returns a specific value. Base cases are crucial to prevent infinite recursion and ensure that the recursive process terminates.

`Recursive Case(s):` These are the conditions under which the function calls itself. In each recursive call, the function works on a smaller or simpler instance of the problem, bringing it closer to a base case.


- In the example: Base case is when `num` is 0, and the function returns 1. The recursive case multiplies `num` by the result of the factorial of `num - 1`. The recursion continues until the base case is reached, at which point the final result is calculated and returned.
- Recursive functions are often used in situations where a problem can be broken down into smaller subproblems of the same type.