#include <stdio.h>

int main()
{
  int children, candies;
  scanf("%d%d",&children,&candies);
  printf("We can give %d candies to each child\n", candies / children);
  printf("%d candies are left\n", candies % children);
  return 0;
}