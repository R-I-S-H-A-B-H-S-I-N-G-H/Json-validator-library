const Ajv = require("ajv");
const ajv = new Ajv(); // options can be passed, e.g. {allErrors: true}

class JsonValidate {
	constructor(_schema) {
		this.schema = _schema;
	}

	validate(_data) {
		const validate = ajv.compile(this.schema);

		const valid = validate(_data);
		if (!valid) {
			console.log(validate.errors);
			return{error:validate.errors}
		} else {
			console.log("SCHEMA IS GOOD");
		}
		return {};
	}
}
window.JsonValidate = (schema) => {
	return new JsonValidate(schema);
};
