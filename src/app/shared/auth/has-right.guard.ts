import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { CurrentUserService } from './current-user.service';

export const hasRightGuard: CanActivateFn = (route, state): boolean => {
  const currentUserService = inject(CurrentUserService);
  return currentUserService.hasRight(route.data['right']); // route.data.right
};
