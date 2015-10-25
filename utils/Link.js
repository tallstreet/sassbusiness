import React, { Component } from 'react';

export default function Link(props) {
  return (
    <a {...props} href={`/#${props.to}`}>{props.children}</a>
  );
}
