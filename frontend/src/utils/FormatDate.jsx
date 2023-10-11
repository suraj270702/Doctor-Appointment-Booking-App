import React from 'react'

const FormatDate = (date,config) => {
 const defaultOptions = {day : "numeric",month : "long",year : 'numeric'}
 const options = config ? config : defaultOptions
 return new Date(date).toDateString('en-US',options)
}

export default FormatDate