import { InjectionToken } from '@angular/core';

export const DEFAULT_CONFIG = {
  form: {
    login: {
      username: {},
      password: {},
      redirect: {
        url: '',
        delay: 1000,
      },
      messages: {
        error: '',
        success: '',
      }
    },
  },
};

export type DefaultConfig = typeof DEFAULT_CONFIG;

export const AUTH_CONFIG = new InjectionToken<DefaultConfig>('auth config');
