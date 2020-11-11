const nodemailer = require('nodemailer');

const generateOrderEmail = ({ order, total }) => {
    return `
        <div>
            <h2>Your recent order for ${total}</h2>
            <p>Please start walking over, we will have your order ready shortly!</p>
            <ul>
                ${order.map(item => `
                    <li>
                        <img src="${item.thumbnail}" alt="${item.name}" />
                        ${item.size} ${item.name} - ${item.price}
                    </li>
                `).join('')}
            </ul>
            <p>Your total is <strong>${total}</strong> due at pickup</p>
            <style>
                ul {
                    list-style: none;
                }
            </style>
        </div>
    `;
}

//Create a transport for nodemailer
const transporter = nodemailer.createTransport({
    service: process.env.MAIL_SERVICE,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASSWORD,
    }
  });

//Time delay function for testing:
// const wait = (ms = 0) => {
//     return new Promise((res, rej) => {
//         setTimeout(res, ms);
//     })
// }

exports.handler = async (event, context) => {
    //Using time delay function for testing:
    // await wait(5000);
    const body = JSON.parse(event.body);

    //Check if honey pot is filled out
    if(body.coffeeCreamer) {
        return {
            statusCode: 400,
            body: JSON.stringify({
                message: 'Beep boop bop 🤖 ERR593'
            })
        }
    }
    
    //validation
    const requiredFields = ['email', 'name', 'order'];
    
    for(const field of requiredFields) {
        if(!body[field]) {
            return {
                statusCode: 400,
                body: JSON.stringify({
                    message: `Oops! You are missing the ${field} field!`,
                }),
            }
        }
    }

    //verify if there are actually items
    if(!body.order.length) {
        return {
            statusCode: 400,
            body: JSON.stringify({
                message: `You might want to add something to your order first`
            })
        }
    };

    //test send an email
    const info = await transporter.sendMail({
        from: 'Steens Beans <steen@steensbeans.com>',
        to: `${body.name} <${body.email}>`,
        subject: 'New Order!',
        html: generateOrderEmail({ order: body.order, total: body.total })
    })
    
    return {
        statusCode: 200,
        body: JSON.stringify(info),
    }

}