/*
 * seStore.js
 * 
 * Copyright 2019 RatulS <ratuls@US-RCD-MAC-rsah.local>
 * 
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 2 of the License, or
 * (at your option) any later version.
 * 
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with this program; if not, write to the Free Software
 * Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston,
 * MA 02110-1301, USA.
 * 
 * 
 */

const AWS = require('aws-sdk');
const s3 = new AWS.S3();

module.exports.save = (name , data, callback) => {
	let params = {
		Bucket: 'pizza-luvrs-saha',
		Key: 'pizzas/${name}.png',
		Body: new Buffer(data, 'base64'),
		ContentEncoding: 'base64',
		ContentType: 'image/png'
		
		};
		s3.putObject(params, (err, data)=> {
			callback(err, '//pizza-luvrs-saha.s3-us-west-2.amazonaws.com/${params.Key}')
			});
};	

