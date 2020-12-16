const {db, Campus, Student} = require('./server/db')
const {green, red} = require('chalk')

const seed = async () => {
  await db.sync({force: true});
  await Campus.create({
    name: 'MIT',
    imageUrl: 'https://s-i.huffpost.com/gen/2736712/images/n-MIT-628x314.jpg',
    address: '77 Massachusetts Ave, Cambridge, MA 02139',
    description: 'The MIT community is driven by a shared purpose: to make a better world through education, research, and innovation. We are fun and quirky, elite but not elitist, inventive and artistic, obsessed with numbers, and welcoming to talented people regardless of where they come from.'
  }); 
  await Campus.create({
    name: 'Stanford University',
    imageUrl: 'https://www-media.stanford.edu/wp-content/uploads/2017/06/11203727/white-plaza-splash-3x2-1499x843.jpg',
    address: '450 Serra Mall, Stanford, CA 94305',
    description: 'A place for learning, discovery, innovation, expression and discourse'
  });
  await Campus.create( {
    name: 'UC Berkeley',
    imageUrl: 'http://www.route40.net/images/postcards/ca-berkeley-uc-c1940.jpg',
    address: 'Berkeley, CA 94720-1234',
    description: 'You will study the wisdom of the past, for in a wilderness of conflicting counsels, a trail has there been blazed. You will study the life of mankind, for this is the life you must order, and, to order with wisdom, must know. You will study the precepts of justice, for these are the truths that through you shall come to their hour of triumph. Here is the high emprise, the fine endeavor, the splendid possibility of achievement, to which I summon you and bid you welcome.'
  });
  await Campus.create(  {
    name: 'Harvard University ',
    imageUrl: 'https://blog.collegevine.com/wp-content/uploads/2017/07/harvard-class-of-2010.jpg',
    address: 'Cambridge, MA 02138',
    description: 'Harvard University is devoted to excellence in teaching, learning, and research, and to developing leaders in many disciplines who make a difference globally. The University, which is based in Cambridge and Boston, Massachusetts, has an enrollment of over 20,000 degree candidates, including undergraduate, graduate, and professional students. Harvard has more than 360,000 alumni around the world.'
  });
  await Campus.create(  {
    name: 'Princeton University',
    imageUrl: 'http://www.beyerblinderbelle.com/media/files/1990_princetonuniversity_projpic04.jpg?w=1200'   ,
    address: 'Princeton, NJ 08544',
    description: 'Princeton University has a longstanding commitment to service, reflected in Princeton’s informal motto — Princeton in the nation’s service and the service of humanity — and exemplified by the extraordinary contributions that Princetonians make to society.'
  });
  await Campus.create(  {
    name: 'Columbia University',
    imageUrl: 'https://thenypost.files.wordpress.com/2017/07/sexual-assault-columbia.jpg?quality=90&strip=all',
    address: '116th St & Broadway, New York, NY 10027',
    description: `Columbia University is one of the world's most important centers of research and at the same time a distinctive and distinguished learning environment for undergraduates and graduate students in many scholarly and professional fields. The University recognizes the importance of its location in New York City and seeks to link its research and teaching to the vast resources of a great metropolis. It seeks to attract a diverse and international faculty and student body, to support research and teaching on global issues, and to create academic relationships with many countries and regions. It expects all areas of the University to advance knowledge and learning at the highest level and to convey the products of its efforts to the world.`
  });

    // await Campus.create(  {
    //   name: ' ',
    //   imageUrl: ' ',
    //   address: ' ',
    //   description: ' '
    // });

  await Student.create( {
    campusId: 1,
    firstName: 'Kofi',
    lastName: 'Annan',
    email: 'Kofiannan@mit.edu',
    imageUrl: 'https://www.prensa-latina.cu/images/2018/agosto/18/onu-kofi-annan.jpg',
    gpa: '4.0'
  });
  await Student.create(  {
    campusId: 2,
    firstName: 'Steve',
    lastName: 'Jobs',
    email: 'Stevejobs@stanford.edu',
    imageUrl: 'http://bullandbearmcgill.com/wp-content/uploads/2014/04/img_steve.jpg',
    gpa: '4.0'
  });
  await Student.create( {
    campusId: 3,
    firstName: 'Beverly',
    lastName: 'Cleary',
    email: 'Beverlycleary@ucberkeley.edu',
    imageUrl: 'https://images.csmonitor.com/csmarchives/2011/07/bc_8.jpg?alias=standard_900x600',
    gpa: '4.0'
  });
  await Student.create(  {
    campusId: 4,
    firstName: 'Bill',
    lastName: 'Gates',
    email: 'billgates@harvard.edu',
    imageUrl: 'https://amp.businessinsider.com/images/53ad72ec6bb3f73a3c3347c3-750-492.jpg',
    gpa: '4.0'
  });
  await Student.create( {
    campusId: 5,
    firstName: 'Jeff',
    lastName: 'Bezos',
    email: 'Jeffbezos@princeton.edu',
    imageUrl: 'https://icdn2.digitaltrends.com/image/jeff_bezos_blue_origin-1.jpg',
    gpa: '4.0'
  });
  await Student.create(  {
    campusId: 6,
    firstName: 'Barack',
    lastName: 'Obama',
    email: 'Barackobama@columbia.edu',
    imageUrl: 'https://bloximages.newyork1.vip.townnews.com/pilotonline.com/content/tncms/assets/v3/editorial/f/45/f4529ca8-5307-5f89-87ad-399e72999d4c/563ce5476ee7e.image.jpg',
    gpa: '4.0'
  });

  // await Student.create(  {
  //   campusId: x,
  //     firstName: ' ',
  //     lastName: ' ',
  //     email: ' ',
  //     imageUrl: ' ',
  //     gpa: ' '
  // });

  console.log(green('Seeding success!'))
  db.close()
}

seed()
  .catch(err => {
    console.error(red('Oh noes! Something went wrong!'))
    console.error(err)
    db.close()
  })

