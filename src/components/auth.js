import React from "react";

export const auth = {
  isAuthenticated: true,
  authenticate(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 100); //fake server auth call
  },
  signout(cb) {
    this.isAuthenticated = false;
    setTimeout(cb, 100); //fake server auth call
  }
};
