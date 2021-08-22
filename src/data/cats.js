const cats = [
  {
    id: 'cat_0',
    photo: 'https://source.unsplash.com/500x509/?cat',
    name: 'Matilda',
    race: 'British Shorthair',
    gender: 'female',
    age: '3 years',
    personality: [
      {
        icon:
          'https://s3-alpha-sig.figma.com/img/fb1f/ab10/89d7e520c5ca61d80497cc4d78a8dd15?Expires=1629676800&Signature=G3wp-lzXmgTg6ajFtezRWMZ5P5od9~oKuGaqqRLKX~zSLeJhUDMZn3kvA~d4jhYWpei0x5qXCuwYVisGuXXiRQ8ft8kLbp3OoGTnPCJpvQwkJht9YlmJ9J28IE0rbGxGSYPZDRtSKAYEgGynlEdXaC336hAJc~Nr-ttV4a6nO3dcXXaiMjnH9cSE8IRxDDy~zOElDLm1uW3ljki1RKjeYcdR7Yi67pRKEcO6xdvzlyfRh0I~1zC1xjHSolPngNt2s4IHH5-x5wP7Ls7603FObp~d5seUj-S1J7VS~nRjs~jZs-qSMzcF5wn2p5WEbW9gNuQEuNpUw-fgixW-laJnmA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
        label: 'Cariñoso',
      },
      {
        icon:
          'https://s3-alpha-sig.figma.com/img/890e/f648/caff835a05fac32f9f53ff0fe52bc05a?Expires=1629676800&Signature=fgfo8A1fmmfShLsepbm2Fyi1V0xVPNQaKK14gBeKFkH8gPlb~UMpCr0Znmji69iNKtx9MfFSRht1x7N-IhmYnvfeUy54sm1qWtLveQ05nhNMS5IiERROCBzAKfmy~M8Z6iN0BsA9VY8kTbbmXHGeOlwigUGmlh0pYzJ~dCjIkHUONWk11K2YYRZOSbEKszcAqjFVpkgcivbt2GmUx2NVWyTFBYOcsoY7KC0AKZ2WMSSUKnZ7L0mlL4H8BQZelkTCws6l7M1SZ3r4lIvSUV3ZkhEch-MQUzici8wBTHBc6SRqyUxNLpNYfTlvhjADRztTirgu6P7gTt41JDV4aEFxcw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
        label: 'Inquieto',
      },
      {
        icon:
          'https://s3-alpha-sig.figma.com/img/e1e1/dc0f/50283df1ee13d8e21bde66f02befccb6?Expires=1630281600&Signature=I2LxQ3E7~lp7xzuXeVfvYsCwSnKIdEq7zzGt2iCPJd-ukXN5c~1xcJpTnV4F7fseMlSHMZQWaImNjcQ0KKg-zTx1MNXMEKyPlHMYlJ3BNNAFFOKG6R6x5PKftUhWgYX0Twbl0xnxJLH4WZdDRzFMs3WGL9kjYt-l5sgyEb~EbVaiz4VC0JoB8HUCiH~0e4rZ34r4bjB8VTnagTCpSafy7DiJUJZILx0dXpPI9d~nybbZCeiupToakoIo1ZeHwsRtrat8GXt-mB8YkU40CrWMocX8cHEa~rde8hAE7GsACNoV1KW1RfZXxgDg7USEbwr~rJnp75uco3kLqcwUUCr~Ig__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
        label: 'Tierno',
      },
    ],
    address: 'Constitución 102, Jiquilpan, Michoacán',
    owner: {
      name: 'Carlos Barajas',
      phone: '3531009875',
      avatar: 'https://avatars.dicebear.com/api/avataaars/r.svg',
    },
    history:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum consectetur repellat modi doloribus iusto aspernatur, nulla magni, sit corrupti aut rerum architecto qui magnam? Vitae deserunt quod minus incidunt non!',
  },
  {
    id: 'cat_1',
    photo: 'https://source.unsplash.com/500x501/?cat',
    name: 'Pelusa',
    race: 'Birmano',
    gender: 'male',
    age: '5 moths',
    personality: [
      {
        icon:
          'https://s3-alpha-sig.figma.com/img/fb1f/ab10/89d7e520c5ca61d80497cc4d78a8dd15?Expires=1629676800&Signature=G3wp-lzXmgTg6ajFtezRWMZ5P5od9~oKuGaqqRLKX~zSLeJhUDMZn3kvA~d4jhYWpei0x5qXCuwYVisGuXXiRQ8ft8kLbp3OoGTnPCJpvQwkJht9YlmJ9J28IE0rbGxGSYPZDRtSKAYEgGynlEdXaC336hAJc~Nr-ttV4a6nO3dcXXaiMjnH9cSE8IRxDDy~zOElDLm1uW3ljki1RKjeYcdR7Yi67pRKEcO6xdvzlyfRh0I~1zC1xjHSolPngNt2s4IHH5-x5wP7Ls7603FObp~d5seUj-S1J7VS~nRjs~jZs-qSMzcF5wn2p5WEbW9gNuQEuNpUw-fgixW-laJnmA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
        label: 'Cariñoso',
      },
      {
        icon:
          'https://s3-alpha-sig.figma.com/img/890e/f648/caff835a05fac32f9f53ff0fe52bc05a?Expires=1629676800&Signature=fgfo8A1fmmfShLsepbm2Fyi1V0xVPNQaKK14gBeKFkH8gPlb~UMpCr0Znmji69iNKtx9MfFSRht1x7N-IhmYnvfeUy54sm1qWtLveQ05nhNMS5IiERROCBzAKfmy~M8Z6iN0BsA9VY8kTbbmXHGeOlwigUGmlh0pYzJ~dCjIkHUONWk11K2YYRZOSbEKszcAqjFVpkgcivbt2GmUx2NVWyTFBYOcsoY7KC0AKZ2WMSSUKnZ7L0mlL4H8BQZelkTCws6l7M1SZ3r4lIvSUV3ZkhEch-MQUzici8wBTHBc6SRqyUxNLpNYfTlvhjADRztTirgu6P7gTt41JDV4aEFxcw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
        label: 'Inquieto',
      },
      {
        icon:
          'https://s3-alpha-sig.figma.com/img/e1e1/dc0f/50283df1ee13d8e21bde66f02befccb6?Expires=1630281600&Signature=I2LxQ3E7~lp7xzuXeVfvYsCwSnKIdEq7zzGt2iCPJd-ukXN5c~1xcJpTnV4F7fseMlSHMZQWaImNjcQ0KKg-zTx1MNXMEKyPlHMYlJ3BNNAFFOKG6R6x5PKftUhWgYX0Twbl0xnxJLH4WZdDRzFMs3WGL9kjYt-l5sgyEb~EbVaiz4VC0JoB8HUCiH~0e4rZ34r4bjB8VTnagTCpSafy7DiJUJZILx0dXpPI9d~nybbZCeiupToakoIo1ZeHwsRtrat8GXt-mB8YkU40CrWMocX8cHEa~rde8hAE7GsACNoV1KW1RfZXxgDg7USEbwr~rJnp75uco3kLqcwUUCr~Ig__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
        label: 'Tierno',
      },
    ],
    address: 'Lázaro Cárdenas 1201, Guadalajara, Jalisco',
    owner: {
      name: 'Oscar Jimenez Barajas',
      phone: '3531009875',
      avatar: 'https://avatars.dicebear.com/api/avataaars/r.svg',
    },
    history:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum consectetur repellat modi doloribus iusto aspernatur, nulla magni, sit corrupti aut rerum architecto qui magnam? Vitae deserunt quod minus incidunt non!',
  },
  {
    id: 'cat_2',
    photo: 'https://source.unsplash.com/500x502/?cat',
    name: 'Kity',
    race: 'Bombay',
    gender: 'male',
    age: '5 years',
    personality: [
      {
        icon:
          'https://s3-alpha-sig.figma.com/img/fb1f/ab10/89d7e520c5ca61d80497cc4d78a8dd15?Expires=1629676800&Signature=G3wp-lzXmgTg6ajFtezRWMZ5P5od9~oKuGaqqRLKX~zSLeJhUDMZn3kvA~d4jhYWpei0x5qXCuwYVisGuXXiRQ8ft8kLbp3OoGTnPCJpvQwkJht9YlmJ9J28IE0rbGxGSYPZDRtSKAYEgGynlEdXaC336hAJc~Nr-ttV4a6nO3dcXXaiMjnH9cSE8IRxDDy~zOElDLm1uW3ljki1RKjeYcdR7Yi67pRKEcO6xdvzlyfRh0I~1zC1xjHSolPngNt2s4IHH5-x5wP7Ls7603FObp~d5seUj-S1J7VS~nRjs~jZs-qSMzcF5wn2p5WEbW9gNuQEuNpUw-fgixW-laJnmA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
        label: 'Cariñoso',
      },
      {
        icon:
          'https://s3-alpha-sig.figma.com/img/890e/f648/caff835a05fac32f9f53ff0fe52bc05a?Expires=1629676800&Signature=fgfo8A1fmmfShLsepbm2Fyi1V0xVPNQaKK14gBeKFkH8gPlb~UMpCr0Znmji69iNKtx9MfFSRht1x7N-IhmYnvfeUy54sm1qWtLveQ05nhNMS5IiERROCBzAKfmy~M8Z6iN0BsA9VY8kTbbmXHGeOlwigUGmlh0pYzJ~dCjIkHUONWk11K2YYRZOSbEKszcAqjFVpkgcivbt2GmUx2NVWyTFBYOcsoY7KC0AKZ2WMSSUKnZ7L0mlL4H8BQZelkTCws6l7M1SZ3r4lIvSUV3ZkhEch-MQUzici8wBTHBc6SRqyUxNLpNYfTlvhjADRztTirgu6P7gTt41JDV4aEFxcw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
        label: 'Inquieto',
      },
      {
        icon:
          'https://s3-alpha-sig.figma.com/img/e1e1/dc0f/50283df1ee13d8e21bde66f02befccb6?Expires=1630281600&Signature=I2LxQ3E7~lp7xzuXeVfvYsCwSnKIdEq7zzGt2iCPJd-ukXN5c~1xcJpTnV4F7fseMlSHMZQWaImNjcQ0KKg-zTx1MNXMEKyPlHMYlJ3BNNAFFOKG6R6x5PKftUhWgYX0Twbl0xnxJLH4WZdDRzFMs3WGL9kjYt-l5sgyEb~EbVaiz4VC0JoB8HUCiH~0e4rZ34r4bjB8VTnagTCpSafy7DiJUJZILx0dXpPI9d~nybbZCeiupToakoIo1ZeHwsRtrat8GXt-mB8YkU40CrWMocX8cHEa~rde8hAE7GsACNoV1KW1RfZXxgDg7USEbwr~rJnp75uco3kLqcwUUCr~Ig__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
        label: 'Tierno',
      },
    ],
    address: 'Hidalgo 230, San Pedro, Michoacán',
    owner: {
      name: 'Rafael Arceo Perez',
      phone: '3531009875',
      avatar: 'https://avatars.dicebear.com/api/avataaars/r.svg',
    },
    history:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum consectetur repellat modi doloribus iusto aspernatur, nulla magni, sit corrupti aut rerum architecto qui magnam? Vitae deserunt quod minus incidunt non!',
  },
  {
    id: 'cat_3',
    photo: 'https://source.unsplash.com/500x503/?cat',
    name: 'Bombón',
    race: 'Gato americano',
    gender: 'male',
    age: '3 moths',
    personality: [
      {
        icon:
          'https://s3-alpha-sig.figma.com/img/fb1f/ab10/89d7e520c5ca61d80497cc4d78a8dd15?Expires=1629676800&Signature=G3wp-lzXmgTg6ajFtezRWMZ5P5od9~oKuGaqqRLKX~zSLeJhUDMZn3kvA~d4jhYWpei0x5qXCuwYVisGuXXiRQ8ft8kLbp3OoGTnPCJpvQwkJht9YlmJ9J28IE0rbGxGSYPZDRtSKAYEgGynlEdXaC336hAJc~Nr-ttV4a6nO3dcXXaiMjnH9cSE8IRxDDy~zOElDLm1uW3ljki1RKjeYcdR7Yi67pRKEcO6xdvzlyfRh0I~1zC1xjHSolPngNt2s4IHH5-x5wP7Ls7603FObp~d5seUj-S1J7VS~nRjs~jZs-qSMzcF5wn2p5WEbW9gNuQEuNpUw-fgixW-laJnmA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
        label: 'Cariñoso',
      },
      {
        icon:
          'https://s3-alpha-sig.figma.com/img/890e/f648/caff835a05fac32f9f53ff0fe52bc05a?Expires=1629676800&Signature=fgfo8A1fmmfShLsepbm2Fyi1V0xVPNQaKK14gBeKFkH8gPlb~UMpCr0Znmji69iNKtx9MfFSRht1x7N-IhmYnvfeUy54sm1qWtLveQ05nhNMS5IiERROCBzAKfmy~M8Z6iN0BsA9VY8kTbbmXHGeOlwigUGmlh0pYzJ~dCjIkHUONWk11K2YYRZOSbEKszcAqjFVpkgcivbt2GmUx2NVWyTFBYOcsoY7KC0AKZ2WMSSUKnZ7L0mlL4H8BQZelkTCws6l7M1SZ3r4lIvSUV3ZkhEch-MQUzici8wBTHBc6SRqyUxNLpNYfTlvhjADRztTirgu6P7gTt41JDV4aEFxcw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
        label: 'Inquieto',
      },
      {
        icon:
          'https://s3-alpha-sig.figma.com/img/e1e1/dc0f/50283df1ee13d8e21bde66f02befccb6?Expires=1630281600&Signature=I2LxQ3E7~lp7xzuXeVfvYsCwSnKIdEq7zzGt2iCPJd-ukXN5c~1xcJpTnV4F7fseMlSHMZQWaImNjcQ0KKg-zTx1MNXMEKyPlHMYlJ3BNNAFFOKG6R6x5PKftUhWgYX0Twbl0xnxJLH4WZdDRzFMs3WGL9kjYt-l5sgyEb~EbVaiz4VC0JoB8HUCiH~0e4rZ34r4bjB8VTnagTCpSafy7DiJUJZILx0dXpPI9d~nybbZCeiupToakoIo1ZeHwsRtrat8GXt-mB8YkU40CrWMocX8cHEa~rde8hAE7GsACNoV1KW1RfZXxgDg7USEbwr~rJnp75uco3kLqcwUUCr~Ig__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
        label: 'Tierno',
      },
    ],
    address: 'Jacarandas 1302, El Fortín, Michoacán',
    owner: {
      name: 'Samantha Jimenez Barajas',
      phone: '3531009875',
      avatar: 'https://avatars.dicebear.com/api/avataaars/r.svg',
    },
    history:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum consectetur repellat modi doloribus iusto aspernatur, nulla magni, sit corrupti aut rerum architecto qui magnam? Vitae deserunt quod minus incidunt non!',
  },
];

export default cats;
