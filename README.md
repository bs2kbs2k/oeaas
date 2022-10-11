# Is-Odd and Is-Even as a Service  _(OEaaS)_

[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)
![GitHub Repo stars](https://img.shields.io/github/stars/bs2kbs2k/oeaas?style=flat-square)
![GitHub issues](https://img.shields.io/github/issues/bs2kbs2k/oeaas?style=flat-square)

A cloud-based, distributed version of is-even and is-odd

## Install

If you want to deploy OEaaS yourself, use [wrangler](https://github.com/cloudflare/wrangler2/).

## Usage

There are two simple endpoints: `https://oeaas.bs2k.me/is-even/:num` and `https://oeaas.bs2k.me/is-odd/:num`.

cURL examples:
```sh
# Expected: {"result":true,"err":false}
curl https://oeaas.bs2k.me/is-even/42

# Expected: {"result":true,"err":false}
curl https://oeaas.bs2k.me/is-odd/69


# Expected: {"result":false,"err":false}
curl https://oeaas.bs2k.me/is-even/1
```

## Contributing

PRs accepted.

Small note: If editing the README, please conform to the [standard-readme](https://github.com/RichardLitt/standard-readme) specification.

## License

MIT © 2022 bs2kbs2k