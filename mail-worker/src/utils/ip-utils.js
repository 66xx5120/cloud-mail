const ipUtils = {
	getIp(c) {
		return  c.req.header('CF-Connecting-IP') ||
			c.req.header('X-Forwarded-For') ||
			'Unknown';
	}
}

export default ipUtils
