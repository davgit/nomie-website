import NutriSense from '../../modules/importer/importers/nutrisense'
import Twitter from '../../modules/importer/importers/twitter'
export default {
  sample: {
    name: 'twitter',
    avatar: 'https://shareking.s3.amazonaws.com/pb-Id1V6jLPYb-1605477915.png',
    importer: Twitter,
  },
  nutrisense: {
    name: 'NutriSense',
    avatar: 'https://shareking.s3.amazonaws.com/pb-rtyPUILDB1-1605459329.png',
    importer: NutriSense,
    headerFormat:
      'class,value,time,length,photo_url,description,occurred_at,started_at,ended_at',
  },
}
