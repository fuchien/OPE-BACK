import Joi from 'joi'

const Information = {
  body: {
    type: Joi.string().required(),
    description: Joi.string().required(),
    title: Joi.string().required(),
    subtitle: Joi.string().required(),
    level: Joi.string().required(),
    image: Joi.string()
  }
}

export default Information
