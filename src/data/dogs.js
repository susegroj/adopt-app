const dogs = [
  {
    id: 'dog_0',
    photo: 'https://source.unsplash.com/500x500/?dog',
    name: 'Chester',
    race: 'Golden retriever',
    gender: 'female',
    age: '1 years',
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
          'https://s3-alpha-sig.figma.com/img/50d0/8a62/dfb1ad30a3dbbea06641677e4e86696b?Expires=1629676800&Signature=JpGFDuMo6rLYdDvDk0oLj2Dpg4rQTcVSBXmQF6XD5vtUwBLuglsvYzNPQE-cJkGSEg5r~YQySQjA0uKI-r7Bn2OU~JX4d9g-vOc3VHV8n9reTw1De0kuC4Oi3K5gI0Ha6TBIh4T4meyBW-ZpGLRWB61XTj6-gus7CvL9dNYzIL0U0jw8Q566R6PT1SIzvXYb-EBVom5FnLJJmmHcHioiilDxf3tg~Q7rgK0biNMA3AyO75h1wYnJjf1odD9j9kQzguqPyZVtgmH5VlfRtQm5QpWR6JAhmCNLf0oV8U2NwdRqb-w8gW8i8SrRiqDAiChnGLYbMz4kKarqjJcFoSbn2g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
        label: 'Juguetón',
      },
    ],
    address: 'San Marcos 1023, Sahuayo, Michoacán',
    owner: {
      name: 'Carolina Santos Placios',
      phone: '3531009875',
      avatar: 'https://avatars.dicebear.com/api/avataaars/r.svg',
    },
    history:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum consectetur repellat modi doloribus iusto aspernatur, nulla magni, sit corrupti aut rerum architecto qui magnam? Vitae deserunt quod minus incidunt non!',
  },
  {
    id: 'dog_1',
    photo: 'https://source.unsplash.com/500x501/?dog',
    name: 'Papi',
    race: 'Chihuahua',
    gender: 'female',
    age: '2 months',
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
          'https://s3-alpha-sig.figma.com/img/50d0/8a62/dfb1ad30a3dbbea06641677e4e86696b?Expires=1629676800&Signature=JpGFDuMo6rLYdDvDk0oLj2Dpg4rQTcVSBXmQF6XD5vtUwBLuglsvYzNPQE-cJkGSEg5r~YQySQjA0uKI-r7Bn2OU~JX4d9g-vOc3VHV8n9reTw1De0kuC4Oi3K5gI0Ha6TBIh4T4meyBW-ZpGLRWB61XTj6-gus7CvL9dNYzIL0U0jw8Q566R6PT1SIzvXYb-EBVom5FnLJJmmHcHioiilDxf3tg~Q7rgK0biNMA3AyO75h1wYnJjf1odD9j9kQzguqPyZVtgmH5VlfRtQm5QpWR6JAhmCNLf0oV8U2NwdRqb-w8gW8i8SrRiqDAiChnGLYbMz4kKarqjJcFoSbn2g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
        label: 'Juguetón',
      },
    ],
    address: 'Constitución 24, Sahuayo, Michoacán',
    owner: {
      name: 'Sandra Hugalde',
      phone: '3531009875',
      avatar: 'https://avatars.dicebear.com/api/avataaars/r.svg',
    },
    history:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum consectetur repellat modi doloribus iusto aspernatur, nulla magni, sit corrupti aut rerum architecto qui magnam? Vitae deserunt quod minus incidunt non!',
  },
  {
    id: 'dog_2',
    photo: 'https://source.unsplash.com/500x502/?dog',
    name: 'Rocky',
    race: 'Rottweiler',
    gender: 'female',
    age: '8 years',
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
          'https://s3-alpha-sig.figma.com/img/50d0/8a62/dfb1ad30a3dbbea06641677e4e86696b?Expires=1629676800&Signature=JpGFDuMo6rLYdDvDk0oLj2Dpg4rQTcVSBXmQF6XD5vtUwBLuglsvYzNPQE-cJkGSEg5r~YQySQjA0uKI-r7Bn2OU~JX4d9g-vOc3VHV8n9reTw1De0kuC4Oi3K5gI0Ha6TBIh4T4meyBW-ZpGLRWB61XTj6-gus7CvL9dNYzIL0U0jw8Q566R6PT1SIzvXYb-EBVom5FnLJJmmHcHioiilDxf3tg~Q7rgK0biNMA3AyO75h1wYnJjf1odD9j9kQzguqPyZVtgmH5VlfRtQm5QpWR6JAhmCNLf0oV8U2NwdRqb-w8gW8i8SrRiqDAiChnGLYbMz4kKarqjJcFoSbn2g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
        label: 'Juguetón',
      },
    ],
    address: 'Mina 232, Sahuayo, Michoacán',
    owner: {
      name: 'Karla Robles Santiago',
      phone: '3531009875',
      avatar: 'https://avatars.dicebear.com/api/avataaars/r.svg',
    },
    history:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum consectetur repellat modi doloribus iusto aspernatur, nulla magni, sit corrupti aut rerum architecto qui magnam? Vitae deserunt quod minus incidunt non!',
  },
  {
    id: 'dog_3',
    photo: 'https://source.unsplash.com/500x503/?dog',
    name: 'Pelusa',
    race: 'Bichón frisé',
    gender: 'female',
    age: '2.5 years',
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
          'https://s3-alpha-sig.figma.com/img/50d0/8a62/dfb1ad30a3dbbea06641677e4e86696b?Expires=1629676800&Signature=JpGFDuMo6rLYdDvDk0oLj2Dpg4rQTcVSBXmQF6XD5vtUwBLuglsvYzNPQE-cJkGSEg5r~YQySQjA0uKI-r7Bn2OU~JX4d9g-vOc3VHV8n9reTw1De0kuC4Oi3K5gI0Ha6TBIh4T4meyBW-ZpGLRWB61XTj6-gus7CvL9dNYzIL0U0jw8Q566R6PT1SIzvXYb-EBVom5FnLJJmmHcHioiilDxf3tg~Q7rgK0biNMA3AyO75h1wYnJjf1odD9j9kQzguqPyZVtgmH5VlfRtQm5QpWR6JAhmCNLf0oV8U2NwdRqb-w8gW8i8SrRiqDAiChnGLYbMz4kKarqjJcFoSbn2g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
        label: 'Juguetón',
      },
    ],
    address: 'Victoria 1023, Sahuayo, Michoacán',
    owner: {
      name: 'Martha Benitez Suarez',
      phone: '3531009875',
      avatar: 'https://avatars.dicebear.com/api/avataaars/r.svg',
    },
    history:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum consectetur repellat modi doloribus iusto aspernatur, nulla magni, sit corrupti aut rerum architecto qui magnam? Vitae deserunt quod minus incidunt non!',
  },
];

export default dogs;
