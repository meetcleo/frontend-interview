const colors = require('colors');
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)

server.get('/convert', (req, res) => {
  const { from, to, amount } = req.query;

  if (!from) console.error('❌ No "from" value provided');
  if (!to) console.error('❌ No "to" value provided');
  if (!amount) console.error('❌ No "amount" value provided');

  const sanitisedFrom = from && from.toUpperCase();
  const sanitisedTo = to &&  to.toUpperCase();
  const sanitisedAmount = amount && parseInt(amount);

  const rates = router.db.getState().rates;

  const fromRate = rates.find(rate => rate.base === sanitisedFrom);
  if (!fromRate) console.error(`⚠️  Could not find currency: ${sanitisedFrom}`);

  const toRate = fromRate && fromRate.rates[sanitisedTo];

  res.jsonp({
    from: sanitisedFrom,
    to: sanitisedTo,
    amount: sanitisedAmount,
    convertedAmount: toRate * sanitisedAmount
  })
})

server.get('/rates/:currencyCode', (req, res) => {
  const { currencyCode } = req.params;
  
  const sanitisedCurrencyCode = currencyCode && currencyCode.toUpperCase();
  const rates = router.db.getState().rates;  
  const currencyWithRates = rates.find(rate => rate.base === sanitisedCurrencyCode);

  if (!currencyWithRates) console.error(`⚠️  Could not find currency: ${sanitisedCurrencyCode}`);
  const copiedRates = { ...currencyWithRates.rates }

  Object.entries(currencyWithRates.rates).map(([key, value]) => {
    if (key !== currencyCode) {
      copiedRates[key] = parseFloat((Math.random() * ((value + 1) - value) + value).toPrecision(8));
    }
    return copiedRates[key];
  })
  res.jsonp({ ...currencyWithRates, rates: copiedRates })
});

server.use(router)
const app = server.listen(3002, () => {
  console.log(
`
  -----  Welcome to the  -----
    _____ _      ______ ____  
   / ____| |    |  ____/ __ \\ 
  | |    | |    | |__ | |  | |
  | |    | |    |  __|| |  | |
  | |____| |____| |___| |__| |
   \\_____|______|______\\____/ 

  ----  Frontend Test  ----

`.brightBlue,
' Resources'.bold,
`\n  http://localhost:${app.address().port}/convert`,
`\n  http://localhost:${app.address().port}/currencies`,
`\n  http://localhost:${app.address().port}/rates\n`,
'\n  Home'.bold,
`\n  http://localhost:${app.address().port}\n`,
)});