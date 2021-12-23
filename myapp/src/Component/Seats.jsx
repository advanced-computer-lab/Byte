import React, { Component } from 'react'
import {
  useState,
  useEffect,
  Fragment,
} from 'react';
import SeatPicker from 'react-seat-picker'
import axios from 'axios';
//var num = 60 ;
function swwitch(num){

  switch(true){
    case  num ==60  :return(
        [[{id: 1, number: 1, isReserved: true, tooltip: 'Reserved For TSA'}, {id: 2, number: 2,  isReserved: true, tooltip: 'Reserved For TSA'}, null, {id: 3, number: '3', isReserved: true, orientation: 'east', tooltip: 'Reserved by Donald Duck'}, {id: 4, number: '4',isReserved: true, orientation: 'west',tooltip: 'Reserved by Daisy Duck'}, null, {id: 5, number: 5,tooltip: 'Cost: 80$'}, {id: 6, number: 6,tooltip: 'Cost: 80$'}],
        [{id: 7, number: 1, isReserved: true, tooltip: 'Reserved For Sherlock holmes'}, {id: 8, number: 2, isReserved: true,tooltip: 'Reserved For John H. Watson'}, null, {id: 9, number: '3', isReserved: false, orientation: 'east',tooltip: 'Cost: 80$'}, {id: 10, number: '4', orientation: 'west',tooltip: 'Cost: 80$'}, null, {id: 11, number: 5,tooltip: 'Cost: 80$'}, {id: 12, number: 6,tooltip: 'Cost: 80$'}],
        [{id: 13, number: 1,tooltip: 'Cost: 80$'}, {id: 14, number: 2,tooltip: 'Cost: 80$'}, null, {id: 15, number: 3, isReserved: false, orientation: 'east',tooltip: 'Cost: 80$'}, {id: 16, number: '4', orientation: 'west',tooltip: 'Cost: 80$'}, null, {id: 17, number: 5,tooltip: 'Cost: 80$'}, {id: 18, number: 6,tooltip: 'Cost: 80$'}],
        [{id: 19, number: 1, tooltip: 'Cost: 80$'}, {id: 20, number: 2,tooltip: 'Cost: 80$'}, null, {id: 21, number: 3, orientation: 'east',tooltip: 'Cost: 80$'}, {id: 22, number: '4', orientation: 'west',tooltip: 'Cost: 80$'}, null, {id: 23, number: 5,tooltip: 'Cost: 80$'}, {id: 24, number: 6,tooltip: 'Cost: 80$'}],
        [{id: 25, number: 1, isReserved: false,tooltip: 'Cost: 80$'}, {id: 26, number: 2, orientation: 'east',tooltip: 'Cost: 80$'}, null, {id: 27, number: '3', isReserved: false,tooltip: 'Cost: 80$'}, {id: 28, number: '4', orientation: 'west',tooltip: 'Cost: 80$'}, null,{id: 29, number: 5, tooltip: 'Cost: 80$'}, {id: 30, number: 6, isReserved: false,tooltip: 'Cost: 80$'}],
        [{id: 31, number: 1, isReserved: false,tooltip: 'Cost: 80$'}, {id: 32, number: 2, orientation: 'east',tooltip: 'Cost: 80$'}, null, {id: 33, number: '3', isReserved: false,tooltip: 'Cost: 80$'}, {id: 34, number: '4', orientation: 'west',tooltip: 'Cost: 80$'}, null,{id: 35, number: 5, tooltip: 'Cost: 80$',tooltip: 'Cost: 80$'}, {id: 36, number: 6, isReserved: false,tooltip: 'Cost: 80$'}],
        [{id: 37, number: 1, isReserved: true, tooltip: 'Reserved For Mr.Bugs Bunny'}, {id: 38, number: 2,  isReserved: true, tooltip: 'Reserved For Mrs.Lola Buny'}, null, {id: 39, number: '3', isReserved: false, orientation: 'east',tooltip: 'Cost: 80$'}, {id: 40, number: '4', orientation: 'west',tooltip: 'Cost: 80$'}, null, {id: 41, number: 5,tooltip: 'Cost: 80$'}, {id: 42, number: 6,tooltip: 'Cost: 80$'}],
        [{id: 43, number: 1, isReserved: false, tooltip: 'Cost: 80$ '}, {id: 44, number: 2, isReserved: false,tooltip: 'Cost: 80$'}, null, {id: 45, number: '3', isReserved: false, orientation: 'east',tooltip: 'Cost: 80$'}, {id: 46, number: '4', orientation: 'west',tooltip: 'Cost: 80$'}, null, {id: 47, number: 5}, {id: 48, number: 6,tooltip: 'Cost: 80$'}],
        [{id: 49, number: 1,tooltip: 'Cost: 80$'}, {id: 50, number: 2,tooltip: 'Cost: 80$'}, null, {id: 51, number: 3, isReserved: false, orientation: 'east',tooltip: 'Cost: 80$'}, {id: 52, number: '4', orientation: 'west',tooltip: 'Cost: 80$'}, null, {id: 53, number: 5,tooltip: 'Cost: 80$'}, {id: 54, number: 6,tooltip: 'Cost: 80$'}],
        [{id: 55, number: 1, tooltip: 'Cost: 80$'}, {id: 56, number: 2,tooltip: 'Cost: 80$'}, null, {id: 57, number: 3, orientation: 'east',tooltip: 'Cost: 80$'}, {id: 58, number: '4', orientation: 'west',tooltip: 'Cost: 80$'}, null, {id: 58, number: 5,tooltip: 'Cost: 80$'}, {id: 59, number: 6,tooltip: 'Cost: 80$'}],
        [null, null, null, null, {id: 60, number: '1', orientation: 'west',tooltip: 'Cost: 80$'}, null,null,null]])
  
    case  num ==50 :return(
      [[{id: 1, number: 1, isReserved: true, tooltip: 'Reserved For TSA'}, {id: 2, number: 2,  isReserved: true, tooltip: 'Reserved For TSA'}, null, {id: 3, number: '3', isReserved: true, orientation: 'east', tooltip: 'Reserved by Donald Duck'}, {id: 4, number: '4',isReserved : true, orientation: 'west', tooltip: 'Reserved by Daisy Duck'}, null, {id: 5, number: 5,tooltip: 'Cost: 80$'}, {id: 6, number: 6,tooltip: 'Cost: 80$'}],
      [{id: 7, number: 1, isReserved: true, tooltip: 'Reserved For Sherlock holmes'}, {id: 8, number: 2, isReserved: true,tooltip: 'Reserved For John H. Watson'}, null, {id: 9, number: '3', isReserved: false, orientation: 'east',tooltip: 'Cost: 80$'}, {id: 10, number: '4', orientation: 'west',tooltip: 'Cost: 80$'}, null, {id: 11, number: 5,tooltip: 'Cost: 80$'}, {id: 12, number: 6,tooltip: 'Cost: 80$'}],
      [{id: 13, number: 1,tooltip: 'Cost: 80$'}, {id: 14, number: 2,tooltip: 'Cost: 80$'}, null, {id: 15, number: 3, isReserved: false, orientation: 'east',tooltip: 'Cost: 80$'}, {id: 16, number: '4', orientation: 'west',tooltip: 'Cost: 80$'}, null, {id: 17, number: 5,tooltip: 'Cost: 80$'}, {id: 18, number: 6,tooltip: 'Cost: 80$'}],
      [{id: 19, number: 1, tooltip: 'Cost: 80$'}, {id: 20, number: 2,tooltip: 'Cost: 80$'}, null, {id: 21, number: 3, orientation: 'east',tooltip: 'Cost: 80$'}, {id: 22, number: '4', orientation: 'west',tooltip: 'Cost: 80$'}, null, {id: 23, number: 5,tooltip: 'Cost: 80$'}, {id: 24, number: 6,tooltip: 'Cost: 80$'}],
      [{id: 25, number: 1, isReserved: false,tooltip: 'Cost: 80$'}, {id: 26, number: 2, orientation: 'east',tooltip: 'Cost: 80$'}, null, {id: 27, number: '3', isReserved: false,tooltip: 'Cost: 80$'}, {id: 28, number: '4', orientation: 'west',tooltip: 'Cost: 80$'}, null,{id: 29, number: 5, tooltip: 'Cost: 80$'}, {id: 30, number: 6, isReserved: false,tooltip: 'Cost: 80$'}],
      [{id: 31, number: 1, isReserved: false,tooltip: 'Cost: 80$'}, {id: 32, number: 2, orientation: 'east',tooltip: 'Cost: 80$'}, null, {id: 33, number: '3', isReserved: false,tooltip: 'Cost: 80$'}, {id: 34, number: '4', orientation: 'west',tooltip: 'Cost: 80$'}, null,{id: 35, number: 5, tooltip: 'Cost: 80$',tooltip: 'Cost: 80$'}, {id: 36, number: 6, isReserved: false,tooltip: 'Cost: 80$'}],
      [{id: 37, number: 1, isReserved: true, tooltip: 'Reserved For Mr.Bugs Bunny'}, {id: 38, number: 2,  isReserved: true, tooltip: 'Reserved For Mrs.Lola Buny'}, null, {id: 39, number: '3', isReserved: false, orientation: 'east',tooltip: 'Cost: 80$'}, {id: 40, number: '4', orientation: 'west',tooltip: 'Cost: 80$'}, null, {id: 41, number: 5,tooltip: 'Cost: 80$'}, {id: 42, number: 6,tooltip: 'Cost: 80$'}],
      [{id: 43, number: 1, isReserved: false, tooltip: 'Reserved '}, {id: 44, number: 2, isReserved: false,tooltip: 'Cost: 80$'}, null, {id: 45, number: '3', isReserved: false, orientation: 'east',tooltip: 'Cost: 80$'}, {id: 46, number: '4', orientation: 'west',tooltip: 'Cost: 80$'}, null, {id: 47, number: 5,tooltip: 'Cost: 80$'}, {id: 48, number: 6,tooltip: 'Cost: 80$'}],
      [null,null,null,{id: 49, number: 3,tooltip: 'Cost: 80$'}, {id: 50, number: 4,tooltip: 'Cost: 80$'},null,null]])
     
  
      case num ==43:return(
      [[{id: 1, number: 1, isReserved: true, tooltip: 'Reserved For TSA'}, {id: 2, number: 2,  isReserved: true, tooltip: 'Reserved For TSA'}, null, {id: 3, number: '3', isReserved: true, orientation: 'east', tooltip: 'Reserved by Donald Duck'}, {id: 4, number: '4',isReserved : true, orientation: 'west', tooltip: 'Reserved by Daisy Duck'}, null, {id: 5, number: 5,tooltip: 'Cost: 80$'}, {id: 6, number: 6,tooltip: 'Cost: 80$'}],
      [{id: 7, number: 1, isReserved: true, tooltip: 'Reserved For Sherlock holmes'}, {id: 8, number: 2, isReserved: true,tooltip: 'Reserved For John H. Watson'}, null, {id: 9, number: '3', isReserved: false, orientation: 'east',tooltip: 'Cost: 80$'}, {id: 10, number: '4', orientation: 'west',tooltip: 'Cost: 80$'}, null, {id: 11, number: 5,tooltip: 'Cost: 80$'}, {id: 12, number: 6,tooltip: 'Cost: 80$'}],
      [{id: 13, number: 1,tooltip: 'Cost: 80$'}, {id: 14, number: 2,tooltip: 'Cost: 80$'}, null, {id: 15, number: 3, isReserved: false, orientation: 'east',tooltip: 'Cost: 80$'}, {id: 16, number: '4', orientation: 'west',tooltip: 'Cost: 80$'}, null, {id: 17, number: 5,tooltip: 'Cost: 80$'}, {id: 18, number: 6,tooltip: 'Cost: 80$'}],
      [{id: 19, number: 1, tooltip: 'Cost: 80$'}, {id: 20, number: 2,tooltip: 'Cost: 80$'}, null, {id: 21, number: 3, orientation: 'east',tooltip: 'Cost: 80$'}, {id: 22, number: '4', orientation: 'west',tooltip: 'Cost: 80$'}, null, {id: 23, number: 5,tooltip: 'Cost: 80$'}, {id: 24, number: 6,tooltip: 'Cost: 80$'}],
      [{id: 25, number: 1, isReserved: false,tooltip: 'Cost: 80$'}, {id: 26, number: 2, orientation: 'east',tooltip: 'Cost: 80$'}, null, {id: 27, number: '3', isReserved: false,tooltip: 'Cost: 80$'}, {id: 28, number: '4', orientation: 'west',tooltip: 'Cost: 80$'}, null,{id: 29, number: 5, tooltip: 'Cost: 80$'}, {id: 30, number: 6, isReserved: false,tooltip: 'Cost: 80$'}],
      [{id: 31, number: 1, isReserved: false,tooltip: 'Cost: 80$'}, {id: 32, number: 2, orientation: 'east',tooltip: 'Cost: 80$'}, null, {id: 33, number: '3', isReserved: false,tooltip: 'Cost: 80$'}, {id: 34, number: '4', orientation: 'west',tooltip: 'Cost: 80$'}, null,{id: 35, number: 5, tooltip: 'Cost: 80$',tooltip: 'Cost: 80$'}, {id: 36, number: 6, isReserved: false,tooltip: 'Cost: 80$'}],
      [{id: 37, number: 1, isReserved: true, tooltip: 'Reserved For Mr.Bugs Bunny'}, {id: 38, number: 2,  isReserved: true, tooltip: 'Reserved For Mrs.Lola Buny'}, null, {id: 39, number: '3', isReserved: false, orientation: 'east',tooltip: 'Cost: 80$'}, {id: 40, number: '4', orientation: 'west',tooltip: 'Cost: 80$'}, null, {id: 41, number: 5,tooltip: 'Cost: 80$'}, {id: 42, number: 6,tooltip: 'Cost: 80$'}],
      [null,null,null,{id: 43, number: 3,tooltip: 'Cost: 80$'}, null,null,null]])
     
  
      case num == 30 :return(
      [ [{id: 1, number: 1, isReserved: true, tooltip: 'Reserved For TSA'}, {id: 2, number: 2,  isReserved: true, tooltip: 'Reserved For TSA'}, null, {id: 3, number: '3', isReserved: true, orientation: 'east', tooltip: 'Reserved by Donald Duck'}, {id: 4, number: '4',isReserved : true, orientation: 'west', tooltip: 'Reserved by Daisy Duck'}, null, {id: 5, number: 5,tooltip: 'Cost: 80$'}, {id: 6, number: 6,tooltip: 'Cost: 80$'}],
      [{id: 7, number: 1, isReserved: true, tooltip: 'Reserved For Sherlock holmes'}, {id: 8, number: 2, isReserved: true,tooltip: 'Reserved For John H. Watson'}, null, {id: 9, number: '3', isReserved: false, orientation: 'east',tooltip: 'Cost: 80$'}, {id: 10, number: '4', orientation: 'west',tooltip: 'Cost: 80$'}, null, {id: 11, number: 5,tooltip: 'Cost: 80$'}, {id: 12, number: 6,tooltip: 'Cost: 80$'}],
      [{id: 13, number: 1,tooltip: 'Cost: 80$'}, {id: 14, number: 2,tooltip: 'Cost: 80$'}, null, {id: 15, number: 3, isReserved: false, orientation: 'east',tooltip: 'Cost: 80$'}, {id: 16, number: '4', orientation: 'west',tooltip: 'Cost: 80$'}, null, {id: 17, number: 5,tooltip: 'Cost: 80$'}, {id: 18, number: 6,tooltip: 'Cost: 80$'}],
      [{id: 19, number: 1, tooltip: 'Cost: 80$'}, {id: 20, number: 2,tooltip: 'Cost: 80$'}, null, {id: 21, number: 3, orientation: 'east',tooltip: 'Cost: 80$'}, {id: 22, number: '4', orientation: 'west',tooltip: 'Cost: 80$'}, null, {id: 23, number: 5,tooltip: 'Cost: 80$'}, {id: 24, number: 6,tooltip: 'Cost: 80$'}],
      [{id: 25, number: 1, isReserved: false,tooltip: 'Cost: 80$'}, {id: 26, number: 2, orientation: 'east',tooltip: 'Cost: 80$'}, null, {id: 27, number: '3', isReserved: false,tooltip: 'Cost: 80$'}, {id: 28, number: '4', orientation: 'west',tooltip: 'Cost: 80$'}, null,{id: 29, number: 5, tooltip: 'Cost: 80$'}, {id: 30, number: 6, isReserved: false,tooltip: 'Cost: 80$'}]
      ])
     
  
      case num == 26 :return(
      [[{id: 1, number: 1, isReserved: true, tooltip: 'Reserved For TSA'}, {id: 2, number: 2,  isReserved: true, tooltip: 'Reserved For TSA'}, null, {id: 3, number: '3', isReserved: true, orientation: 'east', tooltip: 'Reserved by Donald Duck'}, {id: 4, number: '4',isReserved : true, orientation: 'west', tooltip: 'Reserved by Daisy Duck'}, null, {id: 5, number: 5,tooltip: 'Cost: 150$'}, {id: 6, number: 6,tooltip: 'Cost: 150$'}],
      [{id: 7, number: 1, isReserved: true, tooltip: 'Reserved For Sherlock holmes'}, {id: 8, number: 2, isReserved: true,tooltip: 'Reserved For John H. Watson'}, null, {id: 9, number: '3', isReserved: false, orientation: 'east',tooltip: 'Cost: 150$'}, {id: 10, number: '4', orientation: 'west',tooltip: 'Cost: 150$'}, null, {id: 11, number: 5,tooltip: 'Cost: 150$'}, {id: 12, number: 6,tooltip: 'Cost: 150$'}],
      [{id: 13, number: 1,tooltip: 'Cost: 150$'}, {id: 14, number: 2,tooltip: 'Cost: 150$'}, null, {id: 15, number: 3, isReserved: false, orientation: 'east',tooltip: 'Cost: 150$'}, {id: 16, number: '4', orientation: 'west',tooltip: 'Cost: 150$'}, null, {id: 17, number: 5,tooltip: 'Cost: 150$'}, {id: 18, number: 6,tooltip: 'Cost: 150$'}],
      [{id: 19, number: 1, tooltip: 'Cost: 150$'}, {id: 20, number: 2,tooltip: 'Cost: 150$'}, null, {id: 21, number: 3, orientation: 'east',tooltip: 'Cost: 150$'}, {id: 22, number: '4', orientation: 'west',tooltip: 'Cost: 150$'}, null, {id: 23, number: 5,tooltip: 'Cost: 150$'}, {id: 24, number: 6,tooltip: 'Cost: 150$'}],
      [null,null,null,{id: 25, number: 3, isReserved: false,tooltip: 'Cost: 150$'}, {id: 26, number: 4, orientation: 'east',tooltip: 'Cost: 150$'}]])
     
  
      case num == 22 :return(
      [[{id: 1, number: 1, isReserved: true, tooltip: 'Reserved For TSA'}, {id: 2, number: 2,  isReserved: true, tooltip: 'Reserved For TSA'}, null, {id: 3, number: '3', isReserved: true, orientation: 'east', tooltip: 'Reserved by Donald Duck'}, {id: 4, number: '4',isReserved : true, orientation: 'west', tooltip: 'Reserved by Daisy Duck'}, null, {id: 5, number: 5,tooltip: 'Cost: 80$'}, {id: 6, number: 6,tooltip: 'Cost: 80$'}],
      [{id: 7, number: 1, isReserved: true, tooltip: 'Reserved For Sherlock holmes'}, {id: 8, number: 2, isReserved: true,tooltip: 'Reserved For John H. Watson'}, null, {id: 9, number: '3', isReserved: false, orientation: 'east',tooltip: 'Cost: 80$'}, {id: 10, number: '4', orientation: 'west',tooltip: 'Cost: 80$'}, null, {id: 11, number: 5,tooltip: 'Cost: 80$'}, {id: 12, number: 6,tooltip: 'Cost: 80$'}],
      [{id: 13, number: 1,tooltip: 'Cost: 80$'}, {id: 14, number: 2,tooltip: 'Cost: 80$'}, null, {id: 15, number: 3, isReserved: false, orientation: 'east',tooltip: 'Cost: 80$'}, {id: 16, number: '4', orientation: 'west',tooltip: 'Cost: 80$'}, null, {id: 17, number: 5,tooltip: 'Cost: 80$'}, {id: 18, number: 6,tooltip: 'Cost: 80$'}],
      [{id: 19, number: 1, tooltip: 'Cost: 80$'}, {id: 20, number: 2,tooltip: 'Cost: 80$'}, null,null,null,null, {id: 21, number: 5, orientation: 'east',tooltip: 'Cost: 80$'}, {id: 22, number: '6', orientation: 'west',tooltip: 'Cost: 80$'}, null, ]]
      )
  
      case num == 20 :return(
      [ [{id: 1, number: 1, isReserved: true, tooltip: 'Reserved For TSA'}, {id: 2, number: 2,  isReserved: true, tooltip: 'Reserved For TSA'}, null, {id: 3, number: '3', isReserved: true, orientation: 'east', tooltip: 'Reserved by Donald Duck'}, {id: 4, number: '4',isReserved : true, orientation: 'west', tooltip: 'Reserved by Daisy Duck'}, null, {id: 5, number: 5,tooltip: 'Cost: 80$'}, {id: 6, number: 6,tooltip: 'Cost: 80$'}],
      [{id: 7, number: 1, isReserved: true, tooltip: 'Reserved For Sherlock holmes'}, {id: 8, number: 2, isReserved: true,tooltip: 'Reserved For John H. Watson'}, null, {id: 9, number: '3', isReserved: false, orientation: 'east',tooltip: 'Cost: 80$'}, {id: 10, number: '4', orientation: 'west',tooltip: 'Cost: 80$'}, null, {id: 11, number: 5,tooltip: 'Cost: 80$'}, {id: 12, number: 6,tooltip: 'Cost: 80$'}],
      [{id: 13, number: 1,tooltip: 'Cost: 80$'}, {id: 14, number: 2,tooltip: 'Cost: 80$'}, null, {id: 15, number: 3, isReserved: false, orientation: 'east',tooltip: 'Cost: 80$'}, {id: 16, number: '4', orientation: 'west',tooltip: 'Cost: 80$'}, null, {id: 17, number: 5,tooltip: 'Cost: 80$'}, {id: 18, number: 6,tooltip: 'Cost: 80$'}],
      [null,null,null,{id: 19, number: 3, tooltip: 'Cost: 80$'}, {id: 20, number: 4,tooltip: 'Cost: 80$'}]])
     
  
      case num == 16 :return(
      [[{id: 1, number: 1, isReserved: true, tooltip: 'Reserved For TSA'}, {id: 2, number: 2,  isReserved: true, tooltip: 'Reserved For TSA'}, null, {id: 3, number: '3', isReserved: true, orientation: 'east', tooltip: 'Reserved by Donald Duck'}, {id: 4, number: '4',isReserved : true, orientation: 'west', tooltip: 'Reserved by Daisy Duck'}, null, {id: 5, number: 5,tooltip: 'Cost: 200$'}, {id: 6, number: 6,tooltip: 'Cost: 200$'}],
      [{id: 7, number: 1, isReserved: true, tooltip: 'Reserved For Sherlock holmes'}, {id: 8, number: 2, isReserved: true,tooltip: 'Reserved For John H. Watson'}, null, {id: 9, number: '3', isReserved: false, orientation: 'east',tooltip: 'Cost: 200$'}, {id: 10, number: '4', orientation: 'west',tooltip: 'Cost: 200$'}, null, {id: 11, number: 5,tooltip: 'Cost: 200$'}, {id: 12, number: 6,tooltip: 'Cost: 200$'}],
      [{id: 13, number: 1,tooltip: 'Cost: 200$'}, {id: 14, number: 2,tooltip: 'Cost: 200$'}, null,null,null,null, {id: 15, number: 5, isReserved: false, orientation: 'east',tooltip: 'Cost: 200$'}, {id: 16, number: '6', orientation: 'west',tooltip: 'Cost: 200$'}]]
      )
  
      case num == 15 :return(
      [[{id: 1, number: 1, isReserved: true, tooltip: 'Reserved For TSA'}, {id: 2, number: 2,  isReserved: true, tooltip: 'Reserved For TSA'}, null, {id: 3, number: '3', isReserved: true, orientation: 'east', tooltip: 'Reserved by Donald Duck'}, {id: 4, number: '4',isReserved : true, orientation: 'west', tooltip: 'Reserved by Daisy Duck'}, null, {id: 5, number: 5,tooltip: 'Cost: 150$'}, {id: 6, number: 6,tooltip: 'Cost: 150$'}],
      [{id: 7, number: 1, isReserved: true, tooltip: 'Reserved For Sherlock holmes'}, {id: 8, number: 2, isReserved: true,tooltip: 'Reserved For John H. Watson'}, null, {id: 9, number: '3', isReserved: false, orientation: 'east',tooltip: 'Cost: 150$'}, {id: 10, number: '4', orientation: 'west',tooltip: 'Cost: 150$'}, null, {id: 11, number: 5,tooltip: 'Cost: 150$'}, {id: 12, number: 6,tooltip: 'Cost: 150$'}],
      [{id: 13, number: 1,tooltip: 'Cost: 150$'}, {id: 14, number: 2,tooltip: 'Cost: 150$'}, null, {id: 15, number: 3, isReserved: false, orientation: 'east',tooltip: 'Cost: 150$'}]]
      )
  
      case num == 13 :return(
      [[{id: 1, number: 1, isReserved: true, tooltip: 'Reserved For TSA'}, {id: 2, number: 2,  isReserved: true, tooltip: 'Reserved For TSA'}, null, {id: 3, number: '3', isReserved: true, orientation: 'east', tooltip: 'Reserved by Donald Duck'}, {id: 4, number: '4',isReserved : true, orientation: 'west', tooltip: 'Reserved by Daisy Duck'}, null, {id: 5, number: 5,tooltip: 'Cost: 150$'}, {id: 6, number: 6,tooltip: 'Cost: 150$'}],
      [{id: 7, number: 1, isReserved: true, tooltip: 'Reserved For Sherlock holmes'}, {id: 8, number: 2, isReserved: true,tooltip: 'Reserved For John H. Watson'}, null, {id: 9, number: '3', isReserved: false, orientation: 'east',tooltip: 'Cost: 150$'}, {id: 10, number: '4', orientation: 'west',tooltip: 'Cost: 150$'}, null, {id: 11, number: 5,tooltip: 'Cost: 150$'}, {id: 12, number: 6,tooltip: 'Cost: 150$'}],
      [null,null,null,{id: 13, number: 3,tooltip: 'Cost: 150$'}]])
     
  
      case num == 10 :return(
      [[{id: 1, number: 1, isReserved: true, tooltip: 'Reserved For TSA'}, {id: 2, number: 2,  isReserved: true, tooltip: 'Reserved For TSA'}, null, {id: 3, number: '3', isReserved: true, orientation: 'east', tooltip: 'Reserved by Donald Duck'}, {id: 4, number: '4',isReserved : true, orientation: 'west', tooltip: 'Reserved by Daisy Duck'}, null, {id: 5, number: 5,tooltip: 'Cost: 150$'}, {id: 6, number: 6,tooltip: 'Cost: 150$'}],
      [{id: 7, number: 1, isReserved: true, tooltip: 'Reserved For Sherlock holmes'}, {id: 8, number: 2, isReserved: true,tooltip: 'Reserved For John H. Watson'}, null,null,null,null, {id: 9, number: '5', isReserved: false, orientation: 'east',tooltip: 'Cost: 150$'}, {id: 10, number: '6', orientation: 'west',tooltip: 'Cost: 150$'}, null],] 
      )
  
      case num == (6) :return([[{id: 1, number: 1, isReserved: true, tooltip: 'Reserved For TSA'}, {id: 2, number: 2,  isReserved: true, tooltip: 'Reserved For TSA'}, null, {id: 3, number: '3', isReserved: true, orientation: 'east', tooltip: 'Reserved by Donald Duck'}, {id: 4, number: '4',isReserved : true, orientation: 'west', tooltip: 'Reserved by Daisy Duck'}, null, {id: 5, number: 5,tooltip: 'Cost: 200$'}, {id: 6, number: 6,tooltip: 'Cost: 200$'}]])

      case num == 5:return([[{id: 1, number: 1, isReserved: true, tooltip: 'Reserved For TSA'}, {id: 2, number: 2,  isReserved: true, tooltip: 'Reserved For TSA'}, null, {id: 3, number: '3', isReserved: true, orientation: 'east', tooltip: 'Reserved by Donald Duck'}, {id: 4, number: '4',isReserved : true, orientation: 'west', tooltip: 'Reserved by Daisy Duck'}, null, null, {id: 5, number: 6,tooltip: 'Cost: 200$'}]])
     
  
      case num == 3:return([[{id: 1, number: 1, isReserved: true, tooltip: 'Reserved For TSA'},null,null, {id: 2, number: 2,  isReserved: true, tooltip: 'Cost :200$'}, null, null,null,{id: 3, number: '3', isReserved: true, orientation: 'east', tooltip: 'Reserved by Donald Duck'}]])
     
  
      case num == 2 :return([[{id: 1, number: 1, isReserved: true, tooltip: 'Reserved For TSA'}, null,null,null,null, {id: 2, number: 6,tooltip: 'Cost: 200$'}]])
     
  
     default:return([[ null,null,null,null, {id: 1, number: 1,tooltip: 'Cost: 200$'}]])
    
    }
}
// let x = swwitch(num);
// function conv (x){
//   var array =[];
//   console.log('length of x',x.length);
//  // for (var key in x){
//    for (let k=0;k<x.length;k++){
//    // for (let index = 0; index < 6; index++) {
//      // array.push([key,x[key]]); 
//     }
      
//  // let newarr = new Array(x.length).fill().map(()=>new Array(8).fill(0));
//    // }
// //    const newarray =[];
//      //  while (array.length) {
//     //   newarr.push(array.splice(0,8));
//     // }
//     let newarr=[];
//     for (let i=0;i<x.length;i++ ){
//       for (let j=0;j<8;j++ ){
//       newarr.push([i],x[j]); }}
//  //    return array;
//  return newarr;
// //}

// // const arr = Object.values(x);
// // console.log('fffffff',arr);
// // var array =[];
// // console.log('len',x.key.length);

//  }

// console.log("x",x);
// console.log ("num passed in swweitch",num)
// console.log("output of swwitch",swwitch(num));
// console.log("output ofconv has switch passed",conv(x));
// //console.log("newarray",newarray);

//  switchcase (num) 
  

class Seats extends React.Component {
    state = {
        loading: false
      }


      addSeatCallback = ({ row, number, id }, addCb) => {
        this.setState({
          loading: true
        }, async () => {
          await new Promise(resolve => setTimeout(resolve, 1500))
          console.log(`Added seat ${number}, row ${row}, id ${id}`)
          const newTooltip = `tooltip for id-${id} added by callback`
          addCb(row, number, id, newTooltip)
          this.setState({ loading: false })
        })
      }
      addSeatCallbackContinousCase = ({ row, number, id }, addCb, params, removeCb) => {
          this.setState({
            loading: true
          }, async () => {
            if (removeCb) {
              await new Promise(resolve => setTimeout(resolve, 750))
              console.log(`Removed seat ${params.number}, row ${params.row}, id ${params.id}`)
              removeCb(params.row, params.number)
            }
            await new Promise(resolve => setTimeout(resolve, 750))
            console.log(`Added seat ${number}, row ${row}, id ${id}`)
            const newTooltip = `tooltip for id-${id} added by callback`
            addCb(row, number, id, newTooltip)
            this.setState({ loading: false })
          })
        }
        
        removeSeatCallback = ({ row, number, id }, removeCb) => {
          this.setState({
            loading: true
          }, async () => {
            await new Promise(resolve => setTimeout(resolve, 1500))
            console.log(`Removed seat ${number}, row ${row}, id ${id}`)
            // A value of null will reset the tooltip to the original while '' will hide the tooltip
            const newTooltip = ['A', 'B', 'C'].includes(row) ? null : ''
            removeCb(row, number, newTooltip)
            this.setState({ loading: false })
          })
        }


    render() { 
        let search = window.location.search;
        const num = search.split("=")[1];


         const rows = 
         //conv(x);
        // [[{id: 1, number: 1, isReserved: true, tooltip: 'Reserved For TSA'}, {id: 2, number: 2,  isReserved: true, tooltip: 'Reserved For TSA'}, null, {id: 3, number: '3', isReserved: true, orientation: 'east', tooltip: 'Reserved by Buggz Buny'}, {id: 4, number: '4', orientation: 'west',tooltip : 'Cost: 80$'}, null, {id: 5, number: 5,tooltip : 'Cost: 80$'}, {id: 6, number: 6,tooltip : 'Cost: 80$'}],
        // [{id: 7, number: 1, isReserved: false, tooltip: 'Cost: 80$'}, {id: 8, number: 2, isReserved: false,tooltip: 'Cost: 80$'}, null, {id: 9, number: '3', isReserved: false, orientation: 'east',tooltip : 'Cost: 80$'}, {id: 10, number: '4', orientation: 'west',tooltip : 'Cost: 80$'}, null, {id: 11, number: 5,tooltip : 'Cost: 80$'}, {id: 12, number: 6,tooltip : 'Cost: 80$'}],
        // [{id: 13, number: 1,tooltip : 'Cost: 80$'}, {id: 14, number: 2,tooltip : 'Cost: 80$'}, null, {id: 15, number: 3, isReserved: false, orientation: 'east',tooltip : 'Cost: 80$'}, {id: 16, number: '4', orientation: 'west',tooltip : 'Cost: 80$'}, null, {id: 17, number: 5,tooltip : 'Cost: 80$'}, {id: 18, number: 6,tooltip : 'Cost: 80$'}],
        // [{id: 19, number: 1, tooltip:'Cost: 80$'}, {id: 20, number: 2,tooltip : 'Cost: 80$'}, null, {id: 21, number: 3, orientation: 'east',tooltip : 'Cost: 80$'}, {id: 22, number: '4', orientation: 'west',tooltip : 'Cost: 80$'}, null, {id: 23, number: 5,tooltip : 'Cost: 80$'}, {id: 24, number: 6,tooltip : 'Cost: 80$'}],
        // [{id: 25, number: 1, isReserved: false,tooltip : 'Cost: 80$'}, {id: 26, number: 2, orientation: 'east',tooltip : 'Cost: 80$'}, null, {id: 27, number: '3', isReserved: false,tooltip : 'Cost: 80$'}, {id: 28, number: '4', orientation: 'west',tooltip : 'Cost: 80$'}, null,{id: 29, number: 5, tooltip: 'Cost: 80$'}, {id: 30, number: 6, isReserved: false,tooltip : 'Cost: 80$'}],
        // [{id: 31, number: 1, isReserved: false,tooltip : 'Cost: 80$'}, {id: 32, number: 2, orientation: 'east',tooltip : 'Cost: 80$'}, null, {id: 33, number: '3', isReserved: false,tooltip : 'Cost: 80$'}, {id: 34, number: '4', orientation: 'west',tooltip : 'Cost: 80$'}, null,{id: 35, number: 5, tooltip: 'Cost: 80$',tooltip : 'Cost: 80$'}, {id: 36, number: 6, isReserved: false,tooltip : 'Cost: 80$'}],
        // [{id: 37, number: 1, isReserved: true, tooltip: 'Reserved For Mr.Bugs Bunny'}, {id: 38, number: 2,  isReserved: true, tooltip: 'Reserved For Mrs.Lola Buny'}, null, {id: 39, number: '3', isReserved: false, orientation: 'east',tooltip : 'Cost: 80$'}, {id: 40, number: '4', orientation: 'west',tooltip : 'Cost: 80$'}, null, {id: 41, number: 5,tooltip : 'Cost: 80$'}, {id: 42, number: 6,tooltip : 'Cost: 80$'}],
        // [{id: 43, number: 1, isReserved: false, tooltip: 'Cost: 80$ '}, {id: 44, number: 2, isReserved: false,tooltip: 'Cost: 80$'}, null, {id: 45, number: '3', isReserved: false, orientation: 'east',tooltip : 'Cost: 80$'}, {id: 46, number: '4', orientation: 'west',tooltip : 'Cost: 80$'}, null, {id: 47, number: 5,tooltip : 'Cost: 80$'}, {id: 48, number: 6,tooltip : 'Cost: 80$'}],
        // [{id: 49, number: 1,tooltip : 'Cost: 80$'}, {id: 50, number: 2,tooltip : 'Cost: 80$'}, null, {id: 51, number: 3, isReserved: false, orientation: 'east',tooltip : 'Cost: 80$'}, {id: 52, number: '4', orientation: 'west',tooltip : 'Cost: 80$'}, null, {id: 53, number: 5,tooltip : 'Cost: 80$'}, {id: 54, number: 6,tooltip : 'Cost: 80$'}],
        // [{id: 55, number: 1, tooltip: 'Cost: 80$'}, {id: 56, number: 2,tooltip : 'Cost: 80$'}, null, {id: 57, number: 3, orientation: 'east',tooltip : 'Cost: 80$'}, {id: 58, number: '4', orientation: 'west',tooltip : 'Cost: 80$'}, null, {id: 58, number: 5,tooltip : 'Cost: 80$'}, {id: 59, number: 6,tooltip : 'Cost: 80$'}],
        // [null, null, null, null, {id: 60, number: '1', orientation: 'west',tooltip : 'Cost: 80$'}, null,null,null]]

        swwitch(num)
        //<div>{this.switchcase}</div>
          //  [[{id: 1, number: 1, isReserved: true, tooltip: 'Reserved For TSA'}, {id: 2, number: 2,  isReserved: true, tooltip: 'Reserved For TSA'}, null, {id: 3, number: '3', isReserved: true, orientation: 'east', tooltip: 'Reserved by Bugzz Bunny'}, {id: 4, number: '4', orientation: 'west'}, null, {id: 5, number: 5}, {id: 6, number: 6}],
          //   [{id: 7, number: 1, isReserved: true, tooltip: 'Reserved '}, {id: 8, number: 2, isReserved: false,tooltip: 'Cost: 15$'}, null, {id: 9, number: '3', isReserved: true, orientation: 'east'}, {id: 10, number: '4', orientation: 'west'}, null, {id: 11, number: 5}, {id: 12, number: 6}],
          //   [{id: 13, number: 1}, {id: 14, number: 2}, null, {id: 15, number: 3, isReserved: false, orientation: 'east'}, {id: 16, number: '4', orientation: 'west'}, null, {id: 17, number: 5}, {id: 18, number: 6}],
          //   [{id: 19, number: 1, tooltip: 'Cost: 25$'}, {id: 20, number: 2}, null, {id: 21, number: 3, orientation: 'east'}, {id: 22, number: '4', orientation: 'west'}, null, {id: 23, number: 5}, {id: 24, number: 6}],
          //   [{id: 25, number: 1, isReserved: false}, {id: 26, number: 2, orientation: 'east'}, null, {id: 27, number: '3', isReserved: true}, {id: 28, number: '4', orientation: 'west'}, null,{id: 29, number: 5, tooltip: 'Cost: 11$'}, {id: 30, number: 6, isReserved: true}],
          //   [{id: 31, number: 1, isReserved: false}, {id: 32, number: 2, orientation: 'east'}, null, {id: 33, number: '3', isReserved: true}, {id: 34, number: '4', orientation: 'west'}, null,{id: 35, number: 5, tooltip: 'Cost: 11$'}, {id: 36, number: 6, isReserved: true}]]

          const {loading} = this.state
    return (
      <div>
        <h1>Seat Picker</h1>
        <div style={{marginTop: '100px'}}>
          <SeatPicker
            addSeatCallback={this.addSeatCallback}
            removeSeatCallback={this.removeSeatCallback}
            rows={rows}
            maxReservableSeats={3}
            alpha
            visible
            selectedByDefault
            loading={loading}
            tooltipProps={{multiline: true}}
          />

           <button className="btn btn-success m-2" disabled>Book</button>


        </div>

        <h1>Seat Picker Return Flight </h1>
        <div style={{ marginTop: '100px' }}>
          <SeatPicker
            addSeatCallback={this.addSeatCallbackContinousCase}
            removeSeatCallback={this.removeSeatCallback}
            rows={rows}
            maxReservableSeats={3}
            alpha
            visible
            selectedByDefault
            loading={loading}
            tooltipProps={{ multiline: true }}
            continuous
          />
        </div>
      </div>
    )
  }


        // return(
        // <div>
        //     <h1>Available Seats</h1>
        //      <button className="btn btn-success m-2" disabled>Book</button>
        // </div>
        // ); 

  //  }

}
export default Seats;
//export default {Seats, seatsSelected, noOfSeats} ;