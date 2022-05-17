import React, { Component } from 'react'

export default function First(prop)
  {
      return (
        <div>
        <h1>{prop.data}</h1>
        <h1>{prop.text.name}</h1>
        </div>
      );
  } 

  