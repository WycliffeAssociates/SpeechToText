const supportedLanguages = [
    "abi",
    "abk",
    "abp",
    "aca",
    "acd",
    "ace",
    "acf",
    "ach",
    "acn",
    "acr",
    "acu",
    "ade",
    "adh",
    "adj",
    "adx",
    "aeu",
    "afr",
    "agd",
    "agg",
    "agn",
    "agr",
    "agu",
    "agx",
    "aha",
    "ahk",
    "aia",
    "aka",
    "akb",
    "ake",
    "akp",
    "alj",
    "alp",
    "alt",
    "alz",
    "ame",
    "amf",
    "amh",
    "ami",
    "amk",
    "ann",
    "any",
    "aoz",
    "apb",
    "apr",
    "ara",
    "arl",
    "asa",
    "asg",
    "asm",
    "ast",
    "ata",
    "atb",
    "atg",
    "ati",
    "atq",
    "ava",
    "avn",
    "avu",
    "awa",
    "awb",
    "ayo",
    "ayr",
    "ayz",
    "azb",
    "azg",
    "azj",
    "azj",
    "azz",
    "bak",
    "bam",
    "ban",
    "bao",
    "bas",
    "bav",
    "bba",
    "bbb",
    "bbc",
    "bbo",
    "bcc",
    "bcc",
    "bcl",
    "bcw",
    "bdg",
    "bdh",
    "bdq",
    "bdu",
    "bdv",
    "beh",
    "bel",
    "bem",
    "ben",
    "bep",
    "bex",
    "bfa",
    "bfo",
    "bfy",
    "bfz",
    "bgc",
    "bgq",
    "bgr",
    "bgt",
    "bgw",
    "bha",
    "bht",
    "bhz",
    "bib",
    "bim",
    "bis",
    "biv",
    "bjr",
    "bjv",
    "bjw",
    "bjz",
    "bkd",
    "bkv",
    "blh",
    "blt",
    "blx",
    "blz",
    "bmq",
    "bmr",
    "bmu",
    "bmv",
    "bng",
    "bno",
    "bnp",
    "boa",
    "bod",
    "boj",
    "bom",
    "bor",
    "bos",
    "bov",
    "box",
    "bpr",
    "bps",
    "bqc",
    "bqi",
    "bqj",
    "bqp",
    "bre",
    "bru",
    "bsc",
    "bsq",
    "bss",
    "btd",
    "bts",
    "btt",
    "btx",
    "bud",
    "bul",
    "bus",
    "bvc",
    "bvz",
    "bwq",
    "bwu",
    "byr",
    "bzh",
    "bzi",
    "bzj",
    "caa",
    "cab",
    "cac",
    "cac",
    "cak",
    "cak",
    "cak",
    "cak",
    "cak",
    "cak",
    "cap",
    "car",
    "cas",
    "cat",
    "cax",
    "cbc",
    "cbi",
    "cbr",
    "cbs",
    "cbt",
    "cbu",
    "cbv",
    "cce",
    "cco",
    "cdj",
    "ceb",
    "ceg",
    "cek",
    "ces",
    "cfm",
    "cgc",
    "che",
    "chf",
    "chv",
    "chz",
    "cjo",
    "cjp",
    "cjs",
    "ckb",
    "cko",
    "ckt",
    "cla",
    "cle",
    "cly",
    "cme",
    "cmn",
    "cmo",
    "cmo",
    "cmr",
    "cnh",
    "cni",
    "cnl",
    "cnt",
    "coe",
    "cof",
    "cok",
    "con",
    "cot",
    "cou",
    "cpa",
    "cpb",
    "cpu",
    "crh",
    "crk",
    "crk",
    "crn",
    "crq",
    "crs",
    "crt",
    "csk",
    "cso",
    "ctd",
    "ctg",
    "cto",
    "ctu",
    "cuc",
    "cui",
    "cuk",
    "cul",
    "cwa",
    "cwe",
    "cwt",
    "cya",
    "cym",
    "daa",
    "dah",
    "dan",
    "dar",
    "dbj",
    "dbq",
    "ddn",
    "ded",
    "des",
    "deu",
    "dga",
    "dgi",
    "dgk",
    "dgo",
    "dgr",
    "dhi",
    "did",
    "dig",
    "dik",
    "dip",
    "div",
    "djk",
    "dnj",
    "dnj",
    "dnt",
    "dnw",
    "dop",
    "dos",
    "dsh",
    "dso",
    "dtp",
    "dts",
    "dug",
    "dwr",
    "dyi",
    "dyo",
    "dyu",
    "dzo",
    "eip",
    "eka",
    "ell",
    "emp",
    "enb",
    "eng",
    "enx",
    "epo",
    "ese",
    "ess",
    "est",
    "eus",
    "evn",
    "ewe",
    "eza",
    "fal",
    "fao",
    "far",
    "fas",
    "fij",
    "fin",
    "flr",
    "fmu",
    "fon",
    "fra",
    "frd",
    "fry",
    "ful",
    "gag",
    "gag",
    "gai",
    "gam",
    "gau",
    "gbi",
    "gbk",
    "gbm",
    "gbo",
    "gde",
    "geb",
    "gej",
    "gil",
    "gjn",
    "gkn",
    "gld",
    "gle",
    "glg",
    "glk",
    "gmv",
    "gna",
    "gnd",
    "gng",
    "gof",
    "gog",
    "gor",
    "gqr",
    "grc",
    "gri",
    "grn",
    "grt",
    "gso",
    "gub",
    "guc",
    "gud",
    "guh",
    "guj",
    "guk",
    "gum",
    "guo",
    "guq",
    "guu",
    "gux",
    "gvc",
    "gvl",
    "gwi",
    "gwr",
    "gym",
    "gyr",
    "had",
    "hag",
    "hak",
    "hap",
    "hat",
    "hau",
    "hay",
    "heb",
    "heh",
    "hif",
    "hig",
    "hil",
    "hin",
    "hlb",
    "hlt",
    "hne",
    "hnn",
    "hns",
    "hoc",
    "hoy",
    "hrv",
    "hsb",
    "hto",
    "hub",
    "hui",
    "hun",
    "hus",
    "hus",
    "huu",
    "huv",
    "hvn",
    "hwc",
    "hye",
    "hyw",
    "iba",
    "ibo",
    "icr",
    "idd",
    "ifa",
    "ifb",
    "ife",
    "ifk",
    "ifu",
    "ify",
    "ign",
    "ikk",
    "ilb",
    "ilo",
    "imo",
    "ina",
    "inb",
    "ind",
    "iou",
    "ipi",
    "iqw",
    "iri",
    "irk",
    "isl",
    "ita",
    "itl",
    "itv",
    "ixl",
    "ixl",
    "ixl",
    "izr",
    "izz",
    "jac",
    "jam",
    "jav",
    "jbu",
    "jen",
    "jic",
    "jiv",
    "jmc",
    "jmd",
    "jpn",
    "jun",
    "juy",
    "jvn",
    "kaa",
    "kab",
    "kac",
    "kak",
    "kam",
    "kan",
    "kao",
    "kaq",
    "kat",
    "kay",
    "kaz",
    "kbo",
    "kbp",
    "kbq",
    "kbr",
    "kby",
    "kca",
    "kcg",
    "kdc",
    "kde",
    "kdh",
    "kdi",
    "kdj",
    "kdl",
    "kdn",
    "kdt",
    "kea",
    "kek",
    "ken",
    "keo",
    "ker",
    "key",
    "kez",
    "kfb",
    "kff",
    "kfw",
    "kfx",
    "khg",
    "khm",
    "khq",
    "kia",
    "kij",
    "kik",
    "kin",
    "kir",
    "kjb",
    "kje",
    "kjg",
    "kjh",
    "kki",
    "kkj",
    "kle",
    "klu",
    "klv",
    "klw",
    "kma",
    "kmd",
    "kml",
    "kmr",
    "kmr",
    "kmr",
    "kmu",
    "knb",
    "kne",
    "knf",
    "knj",
    "knk",
    "kno",
    "kog",
    "kor",
    "kpq",
    "kps",
    "kpv",
    "kpy",
    "kpz",
    "kqe",
    "kqp",
    "kqr",
    "kqy",
    "krc",
    "kri",
    "krj",
    "krl",
    "krr",
    "krs",
    "kru",
    "ksb",
    "ksr",
    "kss",
    "ktb",
    "ktj",
    "kub",
    "kue",
    "kum",
    "kus",
    "kvn",
    "kvw",
    "kwd",
    "kwf",
    "kwi",
    "kxc",
    "kxf",
    "kxm",
    "kxv",
    "kyb",
    "kyc",
    "kyf",
    "kyg",
    "kyo",
    "kyq",
    "kyu",
    "kyz",
    "kzf",
    "lac",
    "laj",
    "lam",
    "lao",
    "las",
    "lat",
    "lav",
    "law",
    "lbj",
    "lbw",
    "lcp",
    "lee",
    "lef",
    "lem",
    "lew",
    "lex",
    "lgg",
    "lgl",
    "lhu",
    "lia",
    "lid",
    "lif",
    "lin",
    "lip",
    "lis",
    "lit",
    "lje",
    "ljp",
    "llg",
    "lln",
    "lme",
    "lnd",
    "lns",
    "lob",
    "lok",
    "lom",
    "lon",
    "loq",
    "lsi",
    "lsm",
    "ltz",
    "luc",
    "lug",
    "luo",
    "lwo",
    "lww",
    "lzz",
    "maa",
    "maa",
    "mad",
    "mag",
    "mah",
    "mai",
    "maj",
    "mak",
    "mal",
    "mam",
    "mam",
    "mam",
    "mam",
    "maq",
    "mar",
    "maw",
    "maz",
    "mbb",
    "mbc",
    "mbh",
    "mbj",
    "mbt",
    "mbu",
    "mbz",
    "mca",
    "mcb",
    "mcd",
    "mco",
    "mcp",
    "mcq",
    "mcu",
    "mda",
    "mdf",
    "mdv",
    "mdy",
    "med",
    "mee",
    "mej",
    "men",
    "meq",
    "met",
    "mev",
    "mfe",
    "mfh",
    "mfi",
    "mfk",
    "mfq",
    "mfy",
    "mfz",
    "mgd",
    "mge",
    "mgh",
    "mgo",
    "mhi",
    "mhr",
    "mhu",
    "mhx",
    "mhy",
    "mib",
    "mie",
    "mif",
    "mih",
    "mil",
    "mim",
    "min",
    "mio",
    "mip",
    "miq",
    "mit",
    "miy",
    "miz",
    "mjl",
    "mjv",
    "mkd",
    "mkl",
    "mkn",
    "mlg",
    "mlt",
    "mmg",
    "mnb",
    "mnf",
    "mnk",
    "mnw",
    "mnx",
    "moa",
    "mog",
    "mon",
    "mop",
    "mor",
    "mos",
    "mox",
    "moz",
    "mpg",
    "mpm",
    "mpp",
    "mpx",
    "mqb",
    "mqf",
    "mqj",
    "mqn",
    "mri",
    "mrw",
    "msy",
    "mtd",
    "mtj",
    "mto",
    "muh",
    "mup",
    "mur",
    "muv",
    "muy",
    "mvp",
    "mwq",
    "mwv",
    "mxb",
    "mxq",
    "mxt",
    "mxv",
    "mya",
    "myb",
    "myk",
    "myl",
    "myv",
    "myx",
    "myy",
    "mza",
    "mzi",
    "mzj",
    "mzk",
    "mzm",
    "mzw",
    "nab",
    "nag",
    "nan",
    "nas",
    "naw",
    "nca",
    "nch",
    "ncj",
    "ncl",
    "ncu",
    "ndj",
    "ndp",
    "ndv",
    "ndy",
    "ndz",
    "neb",
    "new",
    "nfa",
    "nfr",
    "nga",
    "ngl",
    "ngp",
    "ngu",
    "nhe",
    "nhi",
    "nhu",
    "nhw",
    "nhx",
    "nhy",
    "nia",
    "nij",
    "nim",
    "nin",
    "nko",
    "nlc",
    "nld",
    "nlg",
    "nlk",
    "nmz",
    "nnb",
    "nno",
    "nnq",
    "nnw",
    "noa",
    "nob",
    "nod",
    "nog",
    "not",
    "npi",
    "npl",
    "npy",
    "nso",
    "nst",
    "nsu",
    "ntm",
    "ntr",
    "nuj",
    "nus",
    "nuz",
    "nwb",
    "nxq",
    "nya",
    "nyf",
    "nyn",
    "nyo",
    "nyy",
    "nzi",
    "obo",
    "oci",
    "ojb",
    "ojb",
    "oku",
    "old",
    "omw",
    "onb",
    "ood",
    "orm",
    "ory",
    "oss",
    "ote",
    "otq",
    "ozm",
    "pab",
    "pad",
    "pag",
    "pam",
    "pan",
    "pao",
    "pap",
    "pau",
    "pbb",
    "pbc",
    "pbi",
    "pce",
    "pcm",
    "peg",
    "pez",
    "pib",
    "pil",
    "pir",
    "pis",
    "pjt",
    "pkb",
    "pls",
    "plw",
    "pmf",
    "pny",
    "poh",
    "poh",
    "poi",
    "pol",
    "por",
    "poy",
    "ppk",
    "pps",
    "prf",
    "prk",
    "prt",
    "pse",
    "pss",
    "ptu",
    "pui",
    "pus",
    "pwg",
    "pww",
    "pxm",
    "qub",
    "quc",
    "quc",
    "quc",
    "quf",
    "quh",
    "qul",
    "quw",
    "quy",
    "quz",
    "qvc",
    "qve",
    "qvh",
    "qvm",
    "qvn",
    "qvo",
    "qvs",
    "qvw",
    "qvz",
    "qwh",
    "qxh",
    "qxl",
    "qxn",
    "qxo",
    "qxr",
    "rah",
    "rai",
    "rap",
    "rav",
    "raw",
    "rej",
    "rel",
    "rgu",
    "rhg",
    "rif",
    "rif",
    "ril",
    "rim",
    "rjs",
    "rkt",
    "rmc",
    "rmc",
    "rmo",
    "rmy",
    "rmy",
    "rng",
    "rnl",
    "roh",
    "roh",
    "rol",
    "ron",
    "rop",
    "rro",
    "rub",
    "ruf",
    "rug",
    "run",
    "rus",
    "sab",
    "sag",
    "sah",
    "saj",
    "saq",
    "sas",
    "sat",
    "sba",
    "sbd",
    "sbl",
    "sbp",
    "sch",
    "sck",
    "sda",
    "sea",
    "seh",
    "ses",
    "sey",
    "sgb",
    "sgj",
    "sgw",
    "shi",
    "shk",
    "shn",
    "sho",
    "shp",
    "sid",
    "sig",
    "sil",
    "sja",
    "sjm",
    "sld",
    "slk",
    "slu",
    "slv",
    "sml",
    "smo",
    "sna",
    "snd",
    "sne",
    "snn",
    "snp",
    "snw",
    "som",
    "soy",
    "spa",
    "spp",
    "spy",
    "sqi",
    "sri",
    "srm",
    "srn",
    "srp",
    "srp",
    "srx",
    "stn",
    "stp",
    "suc",
    "suk",
    "sun",
    "sur",
    "sus",
    "suv",
    "suz",
    "swe",
    "swh",
    "sxb",
    "sxn",
    "sya",
    "syl",
    "sza",
    "tac",
    "taj",
    "tam",
    "tao",
    "tap",
    "taq",
    "tat",
    "tav",
    "tbc",
    "tbg",
    "tbk",
    "tbl",
    "tby",
    "tbz",
    "tca",
    "tcc",
    "tcs",
    "tcz",
    "tdj",
    "ted",
    "tee",
    "tel",
    "tem",
    "teo",
    "ter",
    "tes",
    "tew",
    "tex",
    "tfr",
    "tgj",
    "tgk",
    "tgl",
    "tgo",
    "tgp",
    "tha",
    "thk",
    "thl",
    "tih",
    "tik",
    "tir",
    "tkr",
    "tlb",
    "tlj",
    "tly",
    "tmc",
    "tmf",
    "tna",
    "tng",
    "tnk",
    "tnn",
    "tnp",
    "tnr",
    "tnt",
    "tob",
    "toc",
    "toh",
    "tom",
    "tos",
    "tpi",
    "tpm",
    "tpp",
    "tpt",
    "trc",
    "tri",
    "trn",
    "trs",
    "tso",
    "tsz",
    "ttc",
    "tte",
    "ttq",
    "tue",
    "tuf",
    "tuk",
    "tuk",
    "tuo",
    "tur",
    "tvw",
    "twb",
    "twe",
    "twu",
    "txa",
    "txq",
    "txu",
    "tye",
    "tzh",
    "tzh",
    "tzj",
    "tzj",
    "tzo",
    "tzo",
    "ubl",
    "ubu",
    "udm",
    "udu",
    "uig",
    "uig",
    "ukr",
    "umb",
    "unr",
    "upv",
    "ura",
    "urb",
    "urd",
    "urd",
    "urd",
    "urk",
    "urt",
    "ury",
    "usp",
    "uzb",
    "uzb",
    "vag",
    "vid",
    "vie",
    "vif",
    "vmw",
    "vmy",
    "vot",
    "vun",
    "vut",
    "wal",
    "wal",
    "wap",
    "war",
    "waw",
    "way",
    "wba",
    "wlo",
    "wlx",
    "wmw",
    "wob",
    "wol",
    "wsg",
    "wwa",
    "xal",
    "xdy",
    "xed",
    "xer",
    "xho",
    "xmm",
    "xnj",
    "xnr",
    "xog",
    "xon",
    "xrb",
    "xsb",
    "xsm",
    "xsr",
    "xsu",
    "xta",
    "xtd",
    "xte",
    "xtm",
    "xtn",
    "xua",
    "xuo",
    "yaa",
    "yad",
    "yal",
    "yam",
    "yao",
    "yas",
    "yat",
    "yaz",
    "yba",
    "ybb",
    "ycl",
    "ycn",
    "yea",
    "yka",
    "yli",
    "yor",
    "yre",
    "yua",
    "yue",
    "yuz",
    "yva",
    "zaa",
    "zab",
    "zac",
    "zad",
    "zae",
    "zai",
    "zam",
    "zao",
    "zaq",
    "zar",
    "zas",
    "zav",
    "zaw",
    "zca",
    "zga",
    "zim",
    "ziw",
    "zlm",
    "zmz",
    "zne",
    "zos",
    "zpc",
    "zpg",
    "zpi",
    "zpl",
    "zpm",
    "zpo",
    "zpt",
    "zpu",
    "zpz",
    "ztq",
    "zty",
    "zul",
    "zyb",
    "zyp",
    "zza"
];

export default supportedLanguages;