import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ITemTem } from './ITemTem';

@Component({
  selector: 'temtem-list',
  templateUrl: './temtem-list.component.html',
  styleUrls: ['./temtem-list.component.css'],
})
export class TemtemListComponent implements OnInit {
  constructor() {}
  pageTitle = 'TemTem';
  portraitWidth: number = 50;
  portraitMargin: number = 2;
  sub!: Subscription;
  private _listFilter: string = '';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    console.log('In setter:', value);
    this.filteredTemTems = this.performFilter(value);
  }

  temTems: ITemTem[] = [
    {
      number: 1,
      name: 'Mimit',
      types: ['Digital'],
      portraitWikiUrl:
        'https://temtem.wiki.gg/images/thumb/8/88/Mimit.png/55px-Mimit.png',
      lumaPortraitWikiUrl: '',
      wikiUrl: 'https://temtem.wiki.gg/wiki/Mimit',
      stats: {
        hp: 55,
        sta: 55,
        spd: 55,
        atk: 55,
        def: 65,
        spatk: 55,
        spdef: 65,
        total: 405,
      },
      traits: [
        {
          name: 'Striking Transmog',
          wikiUrl: 'https://temtem.wiki.gg/wiki/Striking_Transmog',
          description:
            'When attacking an individual Temtem with a physical technique, Mimit transforms into the target.',
          effect:
            "Striking Transmog causes Mimit to transform into the Temtem the holder hits with Physical Techniques that has single target or single other target as their targeting. It will use the same Base Stats, Techniques, Trait, and Typing of the target but will keep its own Level, SVs and TVs. It also won't copy any Status Conditions or Stat Stage Changes which are currently applied on the target.",
        },
        {
          name: 'Landing Transmog',
          wikiUrl: 'https://temtem.wiki.gg/wiki/Landing_Transmog',
          description:
            'When entering the battlefield, Mimit transforms into the next Temtem in clockwise order.',
          effect:
            "Landing Transmog causes Mimit to transform into the next Temtem in clockwise order upon entering the battlefield. It will use the same Base Stats, Techniques, Trait and Typing of the target but will keep its own Level, SVs and TVs. It also won't copy any Status Conditions or Stat Stage Changes which are currently applied on the target. If the next Temtem is a Mimit, then the transforming Mimit will skip to the next Temtem of a different species. If already transformed, swapped out, and sent back in, so long as the next Temtem in a different species than what is currently copied, Mimit will change when entering the battlefield.",
        },
      ],
      details: {
        height: {
          cm: 42,
          inches: 16,
        },
        weight: {
          kg: 42,
          lbs: 92,
        },
      },
      techniques: [
        {
          name: 'DNA Extraction',
          source: 'Levelling',
          levels: 1,
        },
      ],
      trivia: [
        'Mimit is the only Temtem that needs to have a quest completed before it can be found in the wild.',
        'Mimit has a sticker on the official Temtem Discord, beating Chromeon by 66 votes, out of the total 274 votes, in the 2nd sticker poll.',
        'Mimit has 2 emotes on the official Temtem Discord.',
        'Mimit was first teased in a 2020 Halloween Twitter post.',
      ],
      evolution: {
        evolves: false,
      },
      wikiPortraitUrlLarge: 'https://temtem.wiki.gg',
      lumaWikiPortraitUrlLarge: 'https://temtem.wiki.gg',
      locations: [
        {
          location: 'Iwaba',
          place: '',
          note: '',
          island: 'Cipanku',
          frequency: '20%',
          level: '46 - 52',
          freetem: {
            minLevel: 46,
            maxLevel: 52,
            minPansuns: 434,
            maxPansuns: 488,
          },
        },
      ],
      icon: '/images/portraits/temtem/large/Mimit.png',
      lumaIcon: '/images/portraits/temtem/luma/large/Mimit.png',
      genderRatio: {
        male: 50,
        female: 50,
      },
      catchRate: 30,
      hatchMins: 39,
      tvYields: {
        hp: 0,
        sta: 0,
        spd: 0,
        atk: 0,
        def: 1,
        spatk: 0,
        spdef: 1,
      },
      gameDescription:
        'Mimit has the honor of being the very first Digital ever created. The genomic reservoir contained in its tail allows it an unequalled ability to replicate any other Temtem species, making it the ultimate breeder.',
      wikiRenderStaticUrl:
        'https://temtem.wiki.gg/images/e/e2/Mimit_full_render.png',
      wikiRenderAnimatedUrl:
        'https://temtem.wiki.gg/images/9/94/Mimit_idle_animation.gif',
      wikiRenderStaticLumaUrl:
        'https://temtem.wiki.gg/images/6/6c/LumaMimit_full_render.png',
      wikiRenderAnimatedLumaUrl:
        'https://temtem.wiki.gg/images/4/44/LumaMimit_idle_animation.gif',
      renderStaticImage: '/images/renders/temtem/static/Mimit.png',
      renderStaticLumaImage: '/images/renders/temtem/luma/static/Mimit.png',
      renderAnimatedImage: '/images/renders/temtem/animated/Mimit.gif',
      renderAnimatedLumaImage: '/images/renders/temtem/luma/animated/Mimit.gif',
      weaknesses: {
        Neutral: 1,
        Fire: 1,
        Water: 2,
        Nature: 1,
        Electric: 2,
        Earth: 1,
        Mental: 1,
        Wind: 1,
        Digital: 2,
        Melee: 1,
        Crystal: 1,
        Toxic: 0.5,
      },
    },
    {
      number: 2,
      name: 'Oree',
      types: ['Digital'],
      portraitWikiUrl:
        'https://temtem.wiki.gg/images/thumb/9/99/Oree.png/55px-Oree.png',
      lumaPortraitWikiUrl: '',
      wikiUrl: 'https://temtem.wiki.gg/wiki/Oree',
      stats: {
        hp: 61,
        sta: 74,
        spd: 35,
        atk: 65,
        def: 44,
        spatk: 32,
        spdef: 31,
        total: 342,
      },
      traits: [
        {},
        {
          name: 'Fast Charge',
          wikiUrl: 'https://temtem.wiki.gg/wiki/Fast_Charge',
          description:
            'Once per battle, when a Digital ally enters the battlefield, gets SPD .',
          effect:
            "Fast Charge gifts the holder's Digital ally with SPD once either the holder or the Digital ally enters the battlefield once per battle.",
        },
      ],
      details: {
        height: {
          cm: 128,
          inches: 50,
        },
        weight: {
          kg: 43,
          lbs: 94,
        },
      },
      techniques: [
        {
          name: 'Data Burst',
          source: 'Levelling',
          levels: 1,
        },
        {
          name: 'Mechanical Heat',
          source: 'Levelling',
          levels: 5,
        },
        {
          name: 'Overclock',
          source: 'Levelling',
          levels: 7,
        },
        {
          name: 'Cold Breeze',
          source: 'Levelling',
          levels: 10,
        },
        {
          name: 'Tesla Prison',
          source: 'Levelling',
          levels: 15,
        },
        {
          name: 'Heat Up',
          source: 'Levelling',
          levels: 20,
        },
        {
          name: 'Turbo Attack',
          source: 'Levelling',
          levels: 28,
        },
        {
          name: 'Crystal Bite',
          source: 'Breeding',
        },
        {
          name: 'Frond Whip',
          source: 'Breeding',
        },
        {
          name: 'Telekinetic Shrapnel',
          source: 'Breeding',
        },
        {
          name: 'Wastewater',
          source: 'Breeding',
        },
      ],
      trivia: [
        'Oree is the starter Temtem for the player’s rival, Max.',
        'Oree is mentioned in The creation of Digital Temtem.',
        "Oree is 1 of only 6 temtem with a sticker on the official Temtem Discord that didn't have to go through a sticker poll.",
      ],
      evolution: {
        stage: 0,
        evolutionTree: [
          {
            stage: 0,
            number: 2,
            name: 'Oree',
            level: 0,
            type: 'levels',
            trading: false,
            traits: ['Attack<T>', 'Fast Charge'],
            traitMapping: {
              'Attack<T>': 'Attack<T>',
              'Fast Charge': 'Voltaic Charge',
            },
          },
          {
            stage: 1,
            number: 3,
            name: 'Zaobian',
            level: 35,
            type: 'levels',
            trading: false,
            traits: ['Attack<T>', 'Voltaic Charge'],
            traitMapping: {
              'Attack<T>': 'Attack<T>',
              'Voltaic Charge': 'Voltaic Charge',
            },
          },
        ],
        evolves: true,
        type: 'levels',
        from: null,
        to: {
          stage: 1,
          number: 3,
          name: 'Zaobian',
          level: 35,
          type: 'levels',
          trading: false,
          traits: ['Attack<T>', 'Voltaic Charge'],
          traitMapping: {
            'Attack<T>': 'Attack<T>',
            'Voltaic Charge': 'Voltaic Charge',
          },
        },
        number: 2,
        name: 'Oree',
        level: 0,
        trading: false,
        traits: ['Attack<T>', 'Fast Charge'],
        traitMapping: {
          'Attack<T>': 'Attack<T>',
          'Fast Charge': 'Voltaic Charge',
        },
      },
      wikiPortraitUrlLarge: 'https://temtem.wiki.gg',
      lumaWikiPortraitUrlLarge: 'https://temtem.wiki.gg',
      locations: [
        {
          location: 'Rice Fields',
          place: '',
          note: '',
          island: 'Cipanku',
          frequency: '60%',
          level: '40 - 50',
          freetem: {
            minLevel: 40,
            maxLevel: 50,
            minPansuns: 95,
            maxPansuns: 114,
          },
        },
        {
          location: 'Pillars of Highabove',
          place: '',
          note: '',
          island: 'Cipanku',
          frequency: '50%',
          level: '38 - 50',
          freetem: {
            minLevel: 38,
            maxLevel: 50,
            minPansuns: 91,
            maxPansuns: 114,
          },
        },
      ],
      icon: '/images/portraits/temtem/large/Oree.png',
      lumaIcon: '/images/portraits/temtem/luma/large/Oree.png',
      genderRatio: {
        male: 25,
        female: 75,
      },
      catchRate: 145,
      hatchMins: 16,
      tvYields: {
        hp: 0,
        sta: 1,
        spd: 0,
        atk: 0,
        def: 0,
        spatk: 0,
        spdef: 0,
      },
      gameDescription:
        "One of the first prototypes created in Nanto Labs, Oree's early versions were the forerunners of Digital Temtem. Inquisitive creatures by design, they show great curiosity and a boundless appetite for information.",
      wikiRenderStaticUrl:
        'https://temtem.wiki.gg/images/a/ac/Oree_full_render.png',
      wikiRenderAnimatedUrl:
        'https://temtem.wiki.gg/images/9/9a/Oree_idle_animation.gif',
      wikiRenderStaticLumaUrl:
        'https://temtem.wiki.gg/images/a/a1/LumaOree_full_render.png',
      wikiRenderAnimatedLumaUrl:
        'https://temtem.wiki.gg/images/0/0e/LumaOree_idle_animation.gif',
      renderStaticImage: '/images/renders/temtem/static/Oree.png',
      renderStaticLumaImage: '/images/renders/temtem/luma/static/Oree.png',
      renderAnimatedImage: '/images/renders/temtem/animated/Oree.gif',
      renderAnimatedLumaImage: '/images/renders/temtem/luma/animated/Oree.gif',
      weaknesses: {
        Neutral: 1,
        Fire: 1,
        Water: 2,
        Nature: 1,
        Electric: 2,
        Earth: 1,
        Mental: 1,
        Wind: 1,
        Digital: 2,
        Melee: 1,
        Crystal: 1,
        Toxic: 0.5,
      },
    },
    {
      number: 3,
      name: 'Zaobian',
      types: ['Digital'],
      portraitWikiUrl:
        'https://temtem.wiki.gg/images/thumb/5/54/Zaobian.png/55px-Zaobian.png',
      lumaPortraitWikiUrl: '',
      wikiUrl: 'https://temtem.wiki.gg/wiki/Zaobian',
      stats: {
        hp: 72,
        sta: 90,
        spd: 51,
        atk: 84,
        def: 50,
        spatk: 42,
        spdef: 44,
        total: 433,
      },
      traits: [
        {},
        {
          name: 'Voltaic Charge',
          wikiUrl: 'https://temtem.wiki.gg/wiki/Voltaic_Charge',
          description:
            'When attacked with a single-target technique, the attacker gets 10% knockback damage.',
          effect:
            'Voltaic Charge inflicts 10% of the damage the holder takes from Techniques that have single target or single other target as their targeting to the attacker.',
        },
      ],
      details: {
        height: {
          cm: 213,
          inches: 83,
        },
        weight: {
          kg: 93,
          lbs: 205,
        },
      },
      techniques: [
        {
          name: 'Data Burst',
          source: 'Levelling',
          levels: 1,
        },
        {
          name: 'Mechanical Heat',
          source: 'Levelling',
          levels: 5,
        },
        {
          name: 'Overclock',
          source: 'Levelling',
          levels: 7,
        },
        {
          name: 'Cold Breeze',
          source: 'Levelling',
          levels: 10,
        },
        {
          name: 'Tesla Prison',
          source: 'Levelling',
          levels: 15,
        },
        {
          name: 'Heat Up',
          source: 'Levelling',
          levels: 20,
        },
        {
          name: 'Turbo Attack',
          source: 'Levelling',
          levels: 28,
        },
        {
          name: 'Firewall',
          source: 'Levelling',
          levels: 34,
        },
        {
          name: 'Cyberclaw',
          source: 'Levelling',
          levels: 44,
        },
        {
          name: 'Hologram',
          source: 'Levelling',
          levels: 51,
        },
        {
          name: 'Electropunch',
          source: 'Levelling',
          levels: 66,
        },
        {
          name: 'Turbine',
          source: 'Levelling',
          levels: 80,
        },
        {
          name: 'Reset',
          source: 'Levelling',
          levels: 95,
        },
        {
          name: 'Data Corruption',
          source: 'TechniqueCourses',
        },
        {
          name: 'Purgation',
          source: 'TechniqueCourses',
        },
        {
          name: '5PPEH',
          source: 'TechniqueCourses',
        },
        {
          name: 'Laundry',
          source: 'TechniqueCourses',
        },
        {
          name: 'Crystal Bite',
          source: 'Breeding',
        },
        {
          name: 'Frond Whip',
          source: 'Breeding',
        },
        {
          name: 'Telekinetic Shrapnel',
          source: 'Breeding',
        },
        {
          name: 'Wastewater',
          source: 'Breeding',
        },
      ],
      trivia: [],
      evolution: {
        stage: 1,
        evolutionTree: [
          {
            stage: 0,
            number: 2,
            name: 'Oree',
            level: 0,
            type: 'levels',
            trading: false,
            traits: ['Attack<T>', 'Fast Charge'],
            traitMapping: {
              'Attack<T>': 'Attack<T>',
              'Fast Charge': 'Voltaic Charge',
            },
          },
          {
            stage: 1,
            number: 3,
            name: 'Zaobian',
            level: 35,
            type: 'levels',
            trading: false,
            traits: ['Attack<T>', 'Voltaic Charge'],
            traitMapping: {
              'Attack<T>': 'Attack<T>',
              'Voltaic Charge': 'Voltaic Charge',
            },
          },
        ],
        evolves: true,
        type: 'levels',
        from: {
          stage: 0,
          number: 2,
          name: 'Oree',
          level: 0,
          type: 'levels',
          trading: false,
          traits: ['Attack<T>', 'Fast Charge'],
          traitMapping: {
            'Attack<T>': 'Attack<T>',
            'Fast Charge': 'Voltaic Charge',
          },
        },
        to: null,
        number: 3,
        name: 'Zaobian',
        level: 35,
        trading: false,
        traits: ['Attack<T>', 'Voltaic Charge'],
        traitMapping: {
          'Attack<T>': 'Attack<T>',
          'Voltaic Charge': 'Voltaic Charge',
        },
      },
      wikiPortraitUrlLarge: 'https://temtem.wiki.gg',
      lumaWikiPortraitUrlLarge: 'https://temtem.wiki.gg',
      locations: [],
      icon: '/images/portraits/temtem/large/Zaobian.png',
      lumaIcon: '/images/portraits/temtem/luma/large/Zaobian.png',
      genderRatio: {
        male: 25,
        female: 75,
      },
      catchRate: 105,
      hatchMins: 24,
      tvYields: {
        hp: 0,
        sta: 2,
        spd: 0,
        atk: 1,
        def: 0,
        spatk: 0,
        spdef: 0,
      },
      gameDescription:
        'Zaobian are part of the second generation of Digital Temtem. Created with much more refined technology, they are more intelligent friends and companions, as well as sturdier in battle.',
      wikiRenderStaticUrl:
        'https://temtem.wiki.gg/images/e/e0/Zaobian_full_render.png',
      wikiRenderAnimatedUrl:
        'https://temtem.wiki.gg/images/2/20/Zaobian_idle_animation.gif',
      wikiRenderStaticLumaUrl:
        'https://temtem.wiki.gg/images/5/5c/LumaZaobian_full_render.png',
      wikiRenderAnimatedLumaUrl:
        'https://temtem.wiki.gg/images/e/e3/LumaZaobian_idle_animation.gif',
      renderStaticImage: '/images/renders/temtem/static/Zaobian.png',
      renderStaticLumaImage: '/images/renders/temtem/luma/static/Zaobian.png',
      renderAnimatedImage: '/images/renders/temtem/animated/Zaobian.gif',
      renderAnimatedLumaImage:
        '/images/renders/temtem/luma/animated/Zaobian.gif',
      weaknesses: {
        Neutral: 1,
        Fire: 1,
        Water: 2,
        Nature: 1,
        Electric: 2,
        Earth: 1,
        Mental: 1,
        Wind: 1,
        Digital: 2,
        Melee: 1,
        Crystal: 1,
        Toxic: 0.5,
      },
    },
    {
      number: 4,
      name: 'Chromeon',
      types: ['Digital'],
      portraitWikiUrl:
        'https://temtem.wiki.gg/images/thumb/7/7d/Chromeon_%28Digital%29.png/55px-Chromeon_%28Digital%29.png',
      lumaPortraitWikiUrl: '',
      wikiUrl: 'https://temtem.wiki.gg/wiki/Chromeon',
      stats: {
        hp: 61,
        sta: 55,
        spd: 66,
        atk: 65,
        def: 49,
        spatk: 78,
        spdef: 63,
        total: 437,
      },
      traits: [
        {
          name: 'Synertyper',
          wikiUrl: 'https://temtem.wiki.gg/wiki/Synertyper',
          description:
            'Damage done with techniques is increased by 30% if both allies share a type.',
          effect:
            "Synertyper increases the damage of the holder's Techniques by 30% if both the holder and their ally share a Type.",
        },
        {
          name: 'Pigment Inverter',
          wikiUrl: 'https://temtem.wiki.gg/wiki/Pigment_Inverter',
          description:
            'When attacking, type resistances for the target Temtem are reversed.',
          effect:
            "Pigment Inverter causes the holder's target to have inverted Type effectiveness. For example: if the holder uses a Fire Technique on a Water target, they will take Effective damage rather than Ineffective damage.",
        },
      ],
      details: {
        height: {
          cm: 77,
          inches: 30,
        },
        weight: {
          kg: 36,
          lbs: 79,
        },
      },
      techniques: [
        {
          name: 'Digital Whip',
          source: 'Levelling',
          levels: 1,
        },
        {
          name: 'Shy Shield',
          source: 'Levelling',
          levels: 5,
        },
        {
          name: 'Data Burst',
          source: 'Levelling',
          levels: 8,
        },
        {
          name: 'Hologram',
          source: 'Levelling',
          levels: 13,
        },
        {
          name: 'Binary Flood',
          source: 'Levelling',
          levels: 24,
        },
        {
          name: 'Generify',
          source: 'Levelling',
          levels: 29,
        },
        {
          name: 'Rainbow Guard',
          source: 'Levelling',
          levels: 34,
        },
        {
          name: 'Digital Torrent',
          source: 'Levelling',
          levels: 42,
        },
        {
          name: 'Digithreat',
          source: 'Levelling',
          levels: 55,
        },
        {
          name: 'Plasma Beam',
          source: 'Levelling',
          levels: 85,
        },
        {
          name: 'Digital Whip',
          source: 'Levelling',
          levels: 1,
        },
        {
          name: 'Shy Shield',
          source: 'Levelling',
          levels: 5,
        },
        {
          name: 'Data Burst',
          source: 'Levelling',
          levels: 8,
        },
        {
          name: 'Hologram',
          source: 'Levelling',
          levels: 13,
        },
        {
          name: 'Binary Flood',
          source: 'Levelling',
          levels: 24,
        },
        {
          name: 'Generify',
          source: 'Levelling',
          levels: 29,
        },
        {
          name: 'Rainbow Guard',
          source: 'Levelling',
          levels: 34,
        },
        {
          name: 'Neutral Torrent',
          source: 'Levelling',
          levels: 42,
        },
        {
          name: 'Undermine',
          source: 'Levelling',
          levels: 55,
        },
        {
          name: 'Awful Song',
          source: 'Levelling',
          levels: 85,
        },
        {
          name: 'Digital Whip',
          source: 'Levelling',
          levels: 1,
        },
        {
          name: 'Shy Shield',
          source: 'Levelling',
          levels: 5,
        },
        {
          name: 'Data Burst',
          source: 'Levelling',
          levels: 8,
        },
        {
          name: 'Hologram',
          source: 'Levelling',
          levels: 13,
        },
        {
          name: 'Binary Flood',
          source: 'Levelling',
          levels: 24,
        },
        {
          name: 'Generify',
          source: 'Levelling',
          levels: 29,
        },
        {
          name: 'Rainbow Guard',
          source: 'Levelling',
          levels: 34,
        },
        {
          name: 'Wind Torrent',
          source: 'Levelling',
          levels: 42,
        },
        {
          name: 'Blizzard',
          source: 'Levelling',
          levels: 55,
        },
        {
          name: 'Hypoxia',
          source: 'Levelling',
          levels: 85,
        },
        {
          name: 'Digital Whip',
          source: 'Levelling',
          levels: 1,
        },
        {
          name: 'Shy Shield',
          source: 'Levelling',
          levels: 5,
        },
        {
          name: 'Data Burst',
          source: 'Levelling',
          levels: 8,
        },
        {
          name: 'Hologram',
          source: 'Levelling',
          levels: 13,
        },
        {
          name: 'Binary Flood',
          source: 'Levelling',
          levels: 24,
        },
        {
          name: 'Generify',
          source: 'Levelling',
          levels: 29,
        },
        {
          name: 'Rainbow Guard',
          source: 'Levelling',
          levels: 34,
        },
        {
          name: 'Earth Torrent',
          source: 'Levelling',
          levels: 42,
        },
        {
          name: 'Dust Vortex',
          source: 'Levelling',
          levels: 55,
        },
        {
          name: 'Petrify',
          source: 'Levelling',
          levels: 85,
        },
        {
          name: 'Digital Whip',
          source: 'Levelling',
          levels: 1,
        },
        {
          name: 'Shy Shield',
          source: 'Levelling',
          levels: 5,
        },
        {
          name: 'Data Burst',
          source: 'Levelling',
          levels: 8,
        },
        {
          name: 'Hologram',
          source: 'Levelling',
          levels: 13,
        },
        {
          name: 'Binary Flood',
          source: 'Levelling',
          levels: 24,
        },
        {
          name: 'Generify',
          source: 'Levelling',
          levels: 29,
        },
        {
          name: 'Rainbow Guard',
          source: 'Levelling',
          levels: 34,
        },
        {
          name: 'Water Torrent',
          source: 'Levelling',
          levels: 42,
        },
        {
          name: 'Water Cannon',
          source: 'Levelling',
          levels: 55,
        },
        {
          name: 'Digital Whip',
          source: 'Levelling',
          levels: 1,
        },
        {
          name: 'Shy Shield',
          source: 'Levelling',
          levels: 5,
        },
        {
          name: 'Data Burst',
          source: 'Levelling',
          levels: 8,
        },
        {
          name: 'Hologram',
          source: 'Levelling',
          levels: 13,
        },
        {
          name: 'Binary Flood',
          source: 'Levelling',
          levels: 24,
        },
        {
          name: 'Generify',
          source: 'Levelling',
          levels: 29,
        },
        {
          name: 'Rainbow Guard',
          source: 'Levelling',
          levels: 34,
        },
        {
          name: 'Fire Torrent',
          source: 'Levelling',
          levels: 42,
        },
        {
          name: 'Hellfire',
          source: 'Levelling',
          levels: 55,
        },
        {
          name: 'Fiery Heist',
          source: 'Levelling',
          levels: 100,
        },
        {
          name: 'Digital Whip',
          source: 'Levelling',
          levels: 1,
        },
        {
          name: 'Shy Shield',
          source: 'Levelling',
          levels: 5,
        },
        {
          name: 'Data Burst',
          source: 'Levelling',
          levels: 8,
        },
        {
          name: 'Hologram',
          source: 'Levelling',
          levels: 13,
        },
        {
          name: 'Binary Flood',
          source: 'Levelling',
          levels: 24,
        },
        {
          name: 'Generify',
          source: 'Levelling',
          levels: 29,
        },
        {
          name: 'Rainbow Guard',
          source: 'Levelling',
          levels: 34,
        },
        {
          name: 'Nature Torrent',
          source: 'Levelling',
          levels: 42,
        },
        {
          name: 'Resin Trap',
          source: 'Levelling',
          levels: 55,
        },
        {
          name: 'Digital Whip',
          source: 'Levelling',
          levels: 1,
        },
        {
          name: 'Shy Shield',
          source: 'Levelling',
          levels: 5,
        },
        {
          name: 'Data Burst',
          source: 'Levelling',
          levels: 8,
        },
        {
          name: 'Hologram',
          source: 'Levelling',
          levels: 13,
        },
        {
          name: 'Binary Flood',
          source: 'Levelling',
          levels: 24,
        },
        {
          name: 'Generify',
          source: 'Levelling',
          levels: 29,
        },
        {
          name: 'Rainbow Guard',
          source: 'Levelling',
          levels: 34,
        },
        {
          name: 'Electric Torrent',
          source: 'Levelling',
          levels: 42,
        },
        {
          name: 'Thunder Strike',
          source: 'Levelling',
          levels: 55,
        },
        {
          name: 'Digital Whip',
          source: 'Levelling',
          levels: 1,
        },
        {
          name: 'Shy Shield',
          source: 'Levelling',
          levels: 5,
        },
        {
          name: 'Data Burst',
          source: 'Levelling',
          levels: 8,
        },
        {
          name: 'Hologram',
          source: 'Levelling',
          levels: 13,
        },
        {
          name: 'Binary Flood',
          source: 'Levelling',
          levels: 24,
        },
        {
          name: 'Generify',
          source: 'Levelling',
          levels: 29,
        },
        {
          name: 'Rainbow Guard',
          source: 'Levelling',
          levels: 34,
        },
        {
          name: 'Mental Torrent',
          source: 'Levelling',
          levels: 42,
        },
        {
          name: 'Gamma Burst',
          source: 'Levelling',
          levels: 55,
        },
        {
          name: 'Denigrate',
          source: 'Levelling',
          levels: 85,
        },
        {
          name: 'Digital Whip',
          source: 'Levelling',
          levels: 1,
        },
        {
          name: 'Shy Shield',
          source: 'Levelling',
          levels: 5,
        },
        {
          name: 'Data Burst',
          source: 'Levelling',
          levels: 8,
        },
        {
          name: 'Hologram',
          source: 'Levelling',
          levels: 13,
        },
        {
          name: 'Binary Flood',
          source: 'Levelling',
          levels: 24,
        },
        {
          name: 'Generify',
          source: 'Levelling',
          levels: 29,
        },
        {
          name: 'Rainbow Guard',
          source: 'Levelling',
          levels: 34,
        },
        {
          name: 'Melee Torrent',
          source: 'Levelling',
          levels: 42,
        },
        {
          name: 'Inner Spirit',
          source: 'Levelling',
          levels: 55,
        },
        {
          name: 'Soul Shout',
          source: 'Levelling',
          levels: 85,
        },
        {
          name: 'Digital Whip',
          source: 'Levelling',
          levels: 1,
        },
        {
          name: 'Shy Shield',
          source: 'Levelling',
          levels: 5,
        },
        {
          name: 'Data Burst',
          source: 'Levelling',
          levels: 8,
        },
        {
          name: 'Hologram',
          source: 'Levelling',
          levels: 13,
        },
        {
          name: 'Binary Flood',
          source: 'Levelling',
          levels: 24,
        },
        {
          name: 'Generify',
          source: 'Levelling',
          levels: 29,
        },
        {
          name: 'Rainbow Guard',
          source: 'Levelling',
          levels: 34,
        },
        {
          name: 'Crystal Torrent',
          source: 'Levelling',
          levels: 42,
        },
        {
          name: 'Crystal Bite',
          source: 'Levelling',
          levels: 55,
        },
        {
          name: 'Crystal Deluge',
          source: 'Levelling',
          levels: 85,
        },
        {
          name: 'Digital Whip',
          source: 'Levelling',
          levels: 1,
        },
        {
          name: 'Shy Shield',
          source: 'Levelling',
          levels: 5,
        },
        {
          name: 'Data Burst',
          source: 'Levelling',
          levels: 8,
        },
        {
          name: 'Hologram',
          source: 'Levelling',
          levels: 13,
        },
        {
          name: 'Binary Flood',
          source: 'Levelling',
          levels: 24,
        },
        {
          name: 'Generify',
          source: 'Levelling',
          levels: 29,
        },
        {
          name: 'Rainbow Guard',
          source: 'Levelling',
          levels: 34,
        },
        {
          name: 'Toxic Torrent',
          source: 'Levelling',
          levels: 42,
        },
        {
          name: 'Venom Spread',
          source: 'Levelling',
          levels: 55,
        },
        {
          name: 'Rotten Goo',
          source: 'Levelling',
          levels: 85,
        },
        {
          name: 'Rend',
          source: 'TechniqueCourses',
        },
        {
          name: 'Darkness',
          source: 'TechniqueCourses',
        },
        {
          name: 'Data Corruption',
          source: 'TechniqueCourses',
        },
        {
          name: 'Harmful Microwaves',
          source: 'TechniqueCourses',
        },
        {
          name: 'Refresh',
          source: 'TechniqueCourses',
        },
      ],
      trivia: [
        'The opening sentence of Chromeon\'s Tempedia entry is a reference to the 1983 song "Karma Chameleon" by Culture Club.',
        "Chromeon, along with Koish, are the only Temtem with a different subspecies for each type.\nThis is due to Chromeon being created with Koish DNA as a base.\nThe LEDs across Chromeon's body strongly resemble those featured on Digital Koish's body.",
        "This is due to Chromeon being created with Koish DNA as a base.\nThe LEDs across Chromeon's body strongly resemble those featured on Digital Koish's body.",
        "The LEDs across Chromeon's body strongly resemble those featured on Digital Koish's body.",
      ],
      evolution: {
        evolves: false,
      },
      wikiPortraitUrlLarge: 'https://temtem.wiki.gg',
      lumaWikiPortraitUrlLarge: 'https://temtem.wiki.gg',
      locations: [
        {
          location: 'Pillars of Highabove',
          place: '',
          note: '',
          island: 'Cipanku',
          frequency: '50%',
          level: '45 - 55',
          freetem: {
            minLevel: 45,
            maxLevel: 55,
            minPansuns: 172,
            maxPansuns: 206,
          },
        },
      ],
      icon: '/images/portraits/temtem/large/Chromeon.png',
      lumaIcon: '/images/portraits/temtem/luma/large/Chromeon.png',
      genderRatio: {
        male: 50,
        female: 50,
      },
      catchRate: 80,
      hatchMins: 29,
      tvYields: {
        hp: 0,
        sta: 0,
        spd: 0,
        atk: 0,
        def: 0,
        spatk: 2,
        spdef: 0,
      },
      gameDescription:
        "Chrome-chrome-Chromeoooon, you come and gooo...' This recent breakthrough of Nanto Labs uses modified Koish DNA to create a Digital Temtem with a variable second-typing for maximum versatility.",
      wikiRenderStaticUrl:
        'https://temtem.wiki.gg/images/5/52/Chromeon_full_render.png',
      wikiRenderAnimatedUrl:
        'https://temtem.wiki.gg/images/f/f5/Chromeon_idle_animation.gif',
      wikiRenderStaticLumaUrl:
        'https://temtem.wiki.gg/images/4/45/LumaChromeon_full_render.png',
      wikiRenderAnimatedLumaUrl:
        'https://temtem.wiki.gg/images/c/ca/LumaChromeon_idle_animation.gif',
      renderStaticImage: '/images/renders/temtem/static/Chromeon.png',
      renderStaticLumaImage: '/images/renders/temtem/luma/static/Chromeon.png',
      renderAnimatedImage: '/images/renders/temtem/animated/Chromeon.gif',
      renderAnimatedLumaImage:
        '/images/renders/temtem/luma/animated/Chromeon.gif',
      weaknesses: {
        Neutral: 1,
        Fire: 1,
        Water: 2,
        Nature: 1,
        Electric: 2,
        Earth: 1,
        Mental: 1,
        Wind: 1,
        Digital: 2,
        Melee: 1,
        Crystal: 1,
        Toxic: 0.5,
      },
    },
    {
      number: 5,
      name: 'Halzhi',
      types: ['Digital'],
      portraitWikiUrl:
        'https://temtem.wiki.gg/images/thumb/8/88/Halzhi.png/55px-Halzhi.png',
      lumaPortraitWikiUrl: '',
      wikiUrl: 'https://temtem.wiki.gg/wiki/Halzhi',
      stats: {
        hp: 52,
        sta: 35,
        spd: 38,
        atk: 56,
        def: 48,
        spatk: 39,
        spdef: 44,
        total: 312,
      },
      traits: [
        {
          name: 'Parrier',
          wikiUrl: 'https://temtem.wiki.gg/wiki/Parrier',
          description:
            'Damage taken from physical techniques is reduced by 20%.',
          effect:
            'Parrier decreases the damage the holder takes from Physical Techniques by 20%.',
        },
        {
          name: 'Neutrality',
          wikiUrl: 'https://temtem.wiki.gg/wiki/Neutrality',
          description: 'Prevent all negative status conditions.',
          effect:
            'Neutrality protects the holder from being inflicted with the Asleep, Burned, Cold, Frozen, Exhausted, Isolated, Poisoned, Seized, Trapped and Doomed Conditions.',
        },
      ],
      details: {
        height: {
          cm: 90,
          inches: 35,
        },
        weight: {
          kg: 95,
          lbs: 209,
        },
      },
      techniques: [
        {
          name: 'Scratch',
          source: 'Levelling',
          levels: 1,
        },
        {
          name: 'Token',
          source: 'Levelling',
          levels: 5,
        },
        {
          name: 'Hologram',
          source: 'Levelling',
          levels: 7,
        },
        {
          name: 'Plasma Beam',
          source: 'Levelling',
          levels: 12,
        },
        {
          name: 'Cyberclaw',
          source: 'Levelling',
          levels: 22,
        },
        {
          name: 'Drill Impact',
          source: 'Levelling',
          levels: 32,
        },
        {
          name: 'Cage',
          source: 'TechniqueCourses',
        },
        {
          name: 'Rend',
          source: 'TechniqueCourses',
        },
        {
          name: 'Double Edge',
          source: 'TechniqueCourses',
        },
        {
          name: 'Autodestruction',
          source: 'Breeding',
        },
        {
          name: 'Turbo Attack',
          source: 'Breeding',
        },
      ],
      trivia: ['Halzhi has an emote on the official Temtem Discord.'],
      evolution: {
        stage: 0,
        evolutionTree: [
          {
            stage: 0,
            number: 5,
            name: 'Halzhi',
            level: 0,
            type: 'levels',
            trading: false,
            traits: ['Parrier', 'Neutrality'],
            traitMapping: {
              Parrier: 'Splitter',
              Neutrality: 'Sentinel',
            },
          },
          {
            stage: 1,
            number: 6,
            name: 'Molgu',
            level: 16,
            type: 'levels',
            trading: false,
            traits: ['Splitter', 'Sentinel'],
            traitMapping: {
              Splitter: 'Splitter',
              Sentinel: 'Sentinel',
            },
          },
        ],
        evolves: true,
        type: 'levels',
        from: null,
        to: {
          stage: 1,
          number: 6,
          name: 'Molgu',
          level: 16,
          type: 'levels',
          trading: false,
          traits: ['Splitter', 'Sentinel'],
          traitMapping: {
            Splitter: 'Splitter',
            Sentinel: 'Sentinel',
          },
        },
        number: 5,
        name: 'Halzhi',
        level: 0,
        trading: false,
        traits: ['Parrier', 'Neutrality'],
        traitMapping: {
          Parrier: 'Splitter',
          Neutrality: 'Sentinel',
        },
      },
      wikiPortraitUrlLarge: 'https://temtem.wiki.gg',
      lumaWikiPortraitUrlLarge: 'https://temtem.wiki.gg',
      locations: [
        {
          location: 'Rice Fields',
          place: '',
          note: '',
          island: 'Cipanku',
          frequency: '60%',
          level: '42 - 50',
          freetem: {
            minLevel: 42,
            maxLevel: 50,
            minPansuns: 111,
            maxPansuns: 128,
          },
        },
      ],
      icon: '/images/portraits/temtem/large/Halzhi.png',
      lumaIcon: '/images/portraits/temtem/luma/large/Halzhi.png',
      genderRatio: {
        male: 5,
        female: 95,
      },
      catchRate: 125,
      hatchMins: 20,
      tvYields: {
        hp: 0,
        sta: 0,
        spd: 0,
        atk: 1,
        def: 0,
        spatk: 0,
        spdef: 0,
      },
      gameDescription:
        "This is a newer model from Nanto Labs, specifically designed for Dojo tamers. More intelligent and empathic than older Digitals, it is much more responsive to human commands, and those fortunate enough to have one as a friend wouldn't change it for any other.",
      wikiRenderStaticUrl:
        'https://temtem.wiki.gg/images/6/6f/Halzhi_full_render.png',
      wikiRenderAnimatedUrl:
        'https://temtem.wiki.gg/images/4/4a/Halzhi_idle_animation.gif',
      wikiRenderStaticLumaUrl:
        'https://temtem.wiki.gg/images/7/7f/LumaHalzhi_full_render.png',
      wikiRenderAnimatedLumaUrl:
        'https://temtem.wiki.gg/images/a/a7/LumaHalzhi_idle_animation.gif',
      renderStaticImage: '/images/renders/temtem/static/Halzhi.png',
      renderStaticLumaImage: '/images/renders/temtem/luma/static/Halzhi.png',
      renderAnimatedImage: '/images/renders/temtem/animated/Halzhi.gif',
      renderAnimatedLumaImage:
        '/images/renders/temtem/luma/animated/Halzhi.gif',
      weaknesses: {
        Neutral: 1,
        Fire: 1,
        Water: 2,
        Nature: 1,
        Electric: 2,
        Earth: 1,
        Mental: 1,
        Wind: 1,
        Digital: 2,
        Melee: 1,
        Crystal: 1,
        Toxic: 0.5,
      },
    },
    {
      number: 6,
      name: 'Molgu',
      types: ['Digital'],
      portraitWikiUrl:
        'https://temtem.wiki.gg/images/thumb/5/5f/Molgu.png/55px-Molgu.png',
      lumaPortraitWikiUrl: '',
      wikiUrl: 'https://temtem.wiki.gg/wiki/Molgu',
      stats: {
        hp: 79,
        sta: 47,
        spd: 51,
        atk: 84,
        def: 64,
        spatk: 52,
        spdef: 58,
        total: 435,
      },
      traits: [
        {
          name: 'Splitter',
          wikiUrl: 'https://temtem.wiki.gg/wiki/Splitter',
          description:
            'When attacked with a physical or special technique, prevents all negative status conditions.',
          effect:
            "Splitter protects the holder from being inflicted with the Poisoned, Burned, Asleep, Cold, Exhausted, Isolated, Seized, or Trapped Conditions after being hit with a Physical or Special Technique. For example: Embers won't inflict Burned and Toxic Ink won't inflict Poisoned.",
        },
        {
          name: 'Sentinel',
          wikiUrl: 'https://temtem.wiki.gg/wiki/Sentinel',
          description:
            'When entering the battlefield, removes the asleep status condition on the ally and prevents the asleep status condition on the ally and itself.',
          effect:
            'Sentinel protects the holder and their ally from the Asleep Condition and cures their ally of the Asleep Condition when the holder enters the battlefield.',
        },
      ],
      details: {
        height: {
          cm: 170,
          inches: 66,
        },
        weight: {
          kg: 150,
          lbs: 330,
        },
      },
      techniques: [
        {
          name: 'Scratch',
          source: 'Levelling',
          levels: 1,
        },
        {
          name: 'Token',
          source: 'Levelling',
          levels: 5,
        },
        {
          name: 'Hologram',
          source: 'Levelling',
          levels: 7,
        },
        {
          name: 'Plasma Beam',
          source: 'Levelling',
          levels: 12,
        },
        {
          name: 'Cyberclaw',
          source: 'Levelling',
          levels: 22,
        },
        {
          name: 'Drill Impact',
          source: 'Levelling',
          levels: 32,
        },
        {
          name: 'Digithreat',
          source: 'Levelling',
          levels: 45,
        },
        {
          name: 'Execution',
          source: 'Levelling',
          levels: 55,
        },
        {
          name: 'Faraday Cage',
          source: 'Levelling',
          levels: 72,
        },
        {
          name: 'Blue Screen',
          source: 'Levelling',
          levels: 84,
        },
        {
          name: 'Knockback',
          source: 'Levelling',
          levels: 94,
        },
        {
          name: 'Cage',
          source: 'TechniqueCourses',
        },
        {
          name: 'Rend',
          source: 'TechniqueCourses',
        },
        {
          name: 'Double Edge',
          source: 'TechniqueCourses',
        },
        {
          name: 'Rush',
          source: 'TechniqueCourses',
        },
        {
          name: 'Autodestruction',
          source: 'Breeding',
        },
        {
          name: 'Turbo Attack',
          source: 'Breeding',
        },
      ],
      trivia: [],
      evolution: {
        stage: 1,
        evolutionTree: [
          {
            stage: 0,
            number: 5,
            name: 'Halzhi',
            level: 0,
            type: 'levels',
            trading: false,
            traits: ['Parrier', 'Neutrality'],
            traitMapping: {
              Parrier: 'Splitter',
              Neutrality: 'Sentinel',
            },
          },
          {
            stage: 1,
            number: 6,
            name: 'Molgu',
            level: 16,
            type: 'levels',
            trading: false,
            traits: ['Splitter', 'Sentinel'],
            traitMapping: {
              Splitter: 'Splitter',
              Sentinel: 'Sentinel',
            },
          },
        ],
        evolves: true,
        type: 'levels',
        from: {
          stage: 0,
          number: 5,
          name: 'Halzhi',
          level: 0,
          type: 'levels',
          trading: false,
          traits: ['Parrier', 'Neutrality'],
          traitMapping: {
            Parrier: 'Splitter',
            Neutrality: 'Sentinel',
          },
        },
        to: null,
        number: 6,
        name: 'Molgu',
        level: 16,
        trading: false,
        traits: ['Splitter', 'Sentinel'],
        traitMapping: {
          Splitter: 'Splitter',
          Sentinel: 'Sentinel',
        },
      },
      wikiPortraitUrlLarge: 'https://temtem.wiki.gg',
      lumaWikiPortraitUrlLarge: 'https://temtem.wiki.gg',
      locations: [],
      icon: '/images/portraits/temtem/large/Molgu.png',
      lumaIcon: '/images/portraits/temtem/luma/large/Molgu.png',
      genderRatio: {
        male: 5,
        female: 95,
      },
      catchRate: 105,
      hatchMins: 24,
      tvYields: {
        hp: 0,
        sta: 0,
        spd: 0,
        atk: 2,
        def: 0,
        spatk: 0,
        spdef: 0,
      },
      gameDescription:
        'This model represents a significant upgrade from Halzhi. Surprisingly, Nanto Labs found examples of escaped Molgu evolving on their own, further proving the point thatDigital Temtem are every bit as "alive" and "natural" as other varieties.',
      wikiRenderStaticUrl:
        'https://temtem.wiki.gg/images/3/3c/Molgu_full_render.png',
      wikiRenderAnimatedUrl:
        'https://temtem.wiki.gg/images/5/53/Molgu_idle_animation.gif',
      wikiRenderStaticLumaUrl:
        'https://temtem.wiki.gg/images/d/de/LumaMolgu_full_render.png',
      wikiRenderAnimatedLumaUrl:
        'https://temtem.wiki.gg/images/7/7c/LumaMolgu_idle_animation.gif',
      renderStaticImage: '/images/renders/temtem/static/Molgu.png',
      renderStaticLumaImage: '/images/renders/temtem/luma/static/Molgu.png',
      renderAnimatedImage: '/images/renders/temtem/animated/Molgu.gif',
      renderAnimatedLumaImage: '/images/renders/temtem/luma/animated/Molgu.gif',
      weaknesses: {
        Neutral: 1,
        Fire: 1,
        Water: 2,
        Nature: 1,
        Electric: 2,
        Earth: 1,
        Mental: 1,
        Wind: 1,
        Digital: 2,
        Melee: 1,
        Crystal: 1,
        Toxic: 0.5,
      },
    },
    {
      number: 7,
      name: 'Platypet',
      types: ['Water', 'Toxic'],
      portraitWikiUrl:
        'https://temtem.wiki.gg/images/thumb/0/03/Platypet.png/55px-Platypet.png',
      lumaPortraitWikiUrl: '',
      wikiUrl: 'https://temtem.wiki.gg/wiki/Platypet',
      stats: {
        hp: 55,
        sta: 39,
        spd: 65,
        atk: 45,
        def: 31,
        spatk: 67,
        spdef: 56,
        total: 358,
      },
      traits: [
        {
          name: 'Toxic Affinity',
          wikiUrl: 'https://temtem.wiki.gg/wiki/Toxic_Affinity',
          description: 'Toxic techniques get type damage boost.',
          effect:
            "Toxic Affinity increases the damage of the holder's Toxic Techniques by 50%, as if they had STAB. This boost stacks with actual STAB if the holder is part Toxic.",
        },
        {
          name: 'Amphibian',
          wikiUrl: 'https://temtem.wiki.gg/wiki/Amphibian',
          description:
            'After being attacked with a Water technique, gets SPD and ATK .',
          effect:
            'Amphibian gifts the holder with SPD and ATK after being affected by a Water Technique.',
        },
      ],
      details: {
        height: {
          cm: 85,
          inches: 33,
        },
        weight: {
          kg: 48,
          lbs: 105,
        },
      },
      techniques: [
        {
          name: 'Finbeat',
          source: 'Levelling',
          levels: 1,
        },
        {
          name: 'Water Blade',
          source: 'Levelling',
          levels: 3,
        },
        {
          name: 'Venomous Claws',
          source: 'Levelling',
          levels: 4,
        },
        {
          name: 'Sand Splatter',
          source: 'Levelling',
          levels: 7,
        },
        {
          name: 'Cheer Up',
          source: 'Levelling',
          levels: 9,
        },
        {
          name: 'Aqua Bullet Hell',
          source: 'Levelling',
          levels: 14,
        },
        {
          name: 'Toxic Fang',
          source: 'Levelling',
          levels: 18,
        },
        {
          name: 'Antitoxins',
          source: 'Breeding',
        },
        {
          name: 'Flood',
          source: 'Breeding',
        },
        {
          name: 'Sharp Rain',
          source: 'Breeding',
        },
        {
          name: 'Urushiol',
          source: 'Breeding',
        },
      ],
      trivia: [
        'Platypet is a Breeder Tier Temtem by PokéNinja, who pledged $6000 to the Kickstarter. It was drawn by 50 Shades of Heliolisk. Crema and PokéNinja obtained the rights to add Platypet, Platox and Platimous to the game.',
        "Platypet's Luma color was chosen based on a community vote by PokéNinja.",
        'Platypet was known as Pettans in early development.',
        'Platypet has an emote on the official Temtem Discord.',
        "Platypet is 1 of only 6 temtem with a sticker on the official Temtem Discord that didn't have to go through a sticker poll.",
      ],
      evolution: {
        stage: 0,
        evolutionTree: [
          {
            stage: 0,
            number: 7,
            name: 'Platypet',
            level: 0,
            type: 'levels',
            trading: false,
            traits: ['Toxic Affinity', 'Amphibian'],
            traitMapping: {
              'Toxic Affinity': 'Resistant',
              Amphibian: 'Resilient',
            },
          },
          {
            stage: 1,
            number: 8,
            name: 'Platox',
            level: 20,
            type: 'levels',
            trading: false,
            traits: ['Resistant', 'Resilient'],
            traitMapping: {
              Resistant: 'Zen',
              Resilient: 'Determined',
            },
          },
          {
            stage: 2,
            number: 9,
            name: 'Platimous',
            level: 20,
            type: 'levels',
            trading: false,
            traits: ['Zen', 'Determined'],
            traitMapping: {
              Zen: 'Zen',
              Determined: 'Determined',
            },
          },
        ],
        evolves: true,
        type: 'levels',
        from: null,
        to: {
          stage: 1,
          number: 8,
          name: 'Platox',
          level: 20,
          type: 'levels',
          trading: false,
          traits: ['Resistant', 'Resilient'],
          traitMapping: {
            Resistant: 'Zen',
            Resilient: 'Determined',
          },
        },
        number: 7,
        name: 'Platypet',
        level: 0,
        trading: false,
        traits: ['Toxic Affinity', 'Amphibian'],
        traitMapping: {
          'Toxic Affinity': 'Resistant',
          Amphibian: 'Resilient',
        },
      },
      wikiPortraitUrlLarge: 'https://temtem.wiki.gg',
      lumaWikiPortraitUrlLarge: 'https://temtem.wiki.gg',
      locations: [
        {
          location: 'Gifted Bridges',
          place: '',
          note: '',
          island: 'Deniz',
          frequency: '70%',
          level: '7 - 10',
          freetem: {
            minLevel: 7,
            maxLevel: 10,
            minPansuns: 36,
            maxPansuns: 42,
          },
        },
        {
          location: 'Corrupted Badlands',
          place: 'Corrupted Badlands',
          note: '',
          island: 'Tucma',
          frequency: '30%',
          level: '25 - 29',
          freetem: {
            minLevel: 25,
            maxLevel: 29,
            minPansuns: 74,
            maxPansuns: 83,
          },
        },
        {
          location: 'Xolot Reservoir',
          place: 'Xolot Reservoir',
          note: '',
          island: 'Tucma',
          frequency: '50% - 70%',
          level: '29 - 33',
          freetem: {
            minLevel: 29,
            maxLevel: 33,
            minPansuns: 83,
            maxPansuns: 92,
          },
        },
        {
          location: 'Mines of Mictlan',
          place: 'Mines of Mictlan',
          note: '',
          island: 'Tucma',
          frequency: '85%',
          level: '32 - 36',
          freetem: {
            minLevel: 32,
            maxLevel: 36,
            minPansuns: 90,
            maxPansuns: 98,
          },
        },
        {
          location: 'Gardens of Aztlan',
          place: '',
          note: '',
          island: 'Tucma',
          frequency: '60%',
          level: '25 - 36',
          freetem: {
            minLevel: 25,
            maxLevel: 36,
            minPansuns: 74,
            maxPansuns: 98,
          },
        },
      ],
      icon: '/images/portraits/temtem/large/Platypet.png',
      lumaIcon: '/images/portraits/temtem/luma/large/Platypet.png',
      genderRatio: {
        male: 50,
        female: 50,
      },
      catchRate: 125,
      hatchMins: 20,
      tvYields: {
        hp: 0,
        sta: 0,
        spd: 0,
        atk: 0,
        def: 0,
        spatk: 1,
        spdef: 0,
      },
      gameDescription:
        'Platypet was popularized by a cartoon series, and ever since then it has been one of the most popular Temtem with kids. The series had an educative purpose: to teach children that Toxic Temtem are also valid and can be good friends.',
      wikiRenderStaticUrl:
        'https://temtem.wiki.gg/images/7/7b/Platypet_full_render.png',
      wikiRenderAnimatedUrl:
        'https://temtem.wiki.gg/images/9/95/Platypet_idle_animation.gif',
      wikiRenderStaticLumaUrl:
        'https://temtem.wiki.gg/images/d/dc/LumaPlatypet_full_render.png',
      wikiRenderAnimatedLumaUrl:
        'https://temtem.wiki.gg/images/c/c7/LumaPlatypet_idle_animation.gif',
      renderStaticImage: '/images/renders/temtem/static/Platypet.png',
      renderStaticLumaImage: '/images/renders/temtem/luma/static/Platypet.png',
      renderAnimatedImage: '/images/renders/temtem/animated/Platypet.gif',
      renderAnimatedLumaImage:
        '/images/renders/temtem/luma/animated/Platypet.gif',
      weaknesses: {
        Neutral: 1,
        Fire: 0.5,
        Water: 0.25,
        Nature: 1,
        Electric: 2,
        Earth: 0.5,
        Mental: 1,
        Wind: 2,
        Digital: 1,
        Melee: 1,
        Crystal: 1,
        Toxic: 1,
      },
    },
    {
      number: 8,
      name: 'Platox',
      types: ['Water', 'Toxic'],
      portraitWikiUrl:
        'https://temtem.wiki.gg/images/thumb/7/7b/Platox.png/55px-Platox.png',
      lumaPortraitWikiUrl: '',
      wikiUrl: 'https://temtem.wiki.gg/wiki/Platox',
      stats: {
        hp: 62,
        sta: 44,
        spd: 74,
        atk: 50,
        def: 35,
        spatk: 76,
        spdef: 63,
        total: 404,
      },
      traits: [
        {
          name: 'Resistant',
          wikiUrl: 'https://temtem.wiki.gg/wiki/Resistant',
          description:
            'When getting a negative status condition, decreases its turns by 1.',
          effect:
            'Resistant decreases the duration of the Poisoned, Burned, Asleep, Cold, Exhausted, Isolated, Seized, and Trapped Conditions the holder is inflicted with by 1 turn. If the inflicted Condition would only last 1 turn normally, the holder will not be inflicted with it.',
        },
        {
          name: 'Resilient',
          wikiUrl: 'https://temtem.wiki.gg/wiki/Resilient',
          description:
            'Once per battle, when knocked-out due to overexertion, prevents getting knocked-out, removes the overexertion turn penalization and gets SPD .',
          effect:
            'Resilient protects the holder from being knocked-out due to overexertion by leaving them with 1 HP, gifts them with SPD and negates the overexertion turn penalty once per battle.',
        },
      ],
      details: {
        height: {
          cm: 140,
          inches: 55,
        },
        weight: {
          kg: 70,
          lbs: 154,
        },
      },
      techniques: [
        {
          name: 'Finbeat',
          source: 'Levelling',
          levels: 1,
        },
        {
          name: 'Water Blade',
          source: 'Levelling',
          levels: 3,
        },
        {
          name: 'Venomous Claws',
          source: 'Levelling',
          levels: 4,
        },
        {
          name: 'Sand Splatter',
          source: 'Levelling',
          levels: 7,
        },
        {
          name: 'Cheer Up',
          source: 'Levelling',
          levels: 9,
        },
        {
          name: 'Aqua Bullet Hell',
          source: 'Levelling',
          levels: 14,
        },
        {
          name: 'Toxic Fang',
          source: 'Levelling',
          levels: 18,
        },
        {
          name: 'Tsunami',
          source: 'Levelling',
          levels: 34,
        },
        {
          name: 'Paralyzing Poison',
          source: 'Levelling',
          levels: 40,
        },
        {
          name: 'Misogi',
          source: 'TechniqueCourses',
        },
        {
          name: 'Noxious Bomb',
          source: 'TechniqueCourses',
        },
        {
          name: 'Rend',
          source: 'TechniqueCourses',
        },
        {
          name: 'Footwork',
          source: 'TechniqueCourses',
        },
        {
          name: 'Held Anger',
          source: 'TechniqueCourses',
        },
        {
          name: 'Major Slash',
          source: 'TechniqueCourses',
        },
        {
          name: 'Antitoxins',
          source: 'Breeding',
        },
        {
          name: 'Flood',
          source: 'Breeding',
        },
        {
          name: 'Sharp Rain',
          source: 'Breeding',
        },
        {
          name: 'Urushiol',
          source: 'Breeding',
        },
      ],
      trivia: [
        'A wild Luma Platox can be spotted in the overworld at the Xolot Reservoir.',
        'Platox is a Breeder Tier Temtem by PokéNinja, who pledged $6000 to the Kickstarter. It was drawn by 50 Shades of Heliolisk. Crema and PokéNinja obtained the rights to add Platypet, Platox and Platimous to the game.',
        "Platox' Luma color was chosen based on a community vote by PokéNinja.",
      ],
      evolution: {
        stage: 1,
        evolutionTree: [
          {
            stage: 0,
            number: 7,
            name: 'Platypet',
            level: 0,
            type: 'levels',
            trading: false,
            traits: ['Toxic Affinity', 'Amphibian'],
            traitMapping: {
              'Toxic Affinity': 'Resistant',
              Amphibian: 'Resilient',
            },
          },
          {
            stage: 1,
            number: 8,
            name: 'Platox',
            level: 20,
            type: 'levels',
            trading: false,
            traits: ['Resistant', 'Resilient'],
            traitMapping: {
              Resistant: 'Zen',
              Resilient: 'Determined',
            },
          },
          {
            stage: 2,
            number: 9,
            name: 'Platimous',
            level: 20,
            type: 'levels',
            trading: false,
            traits: ['Zen', 'Determined'],
            traitMapping: {
              Zen: 'Zen',
              Determined: 'Determined',
            },
          },
        ],
        evolves: true,
        type: 'levels',
        from: {
          stage: 0,
          number: 7,
          name: 'Platypet',
          level: 0,
          type: 'levels',
          trading: false,
          traits: ['Toxic Affinity', 'Amphibian'],
          traitMapping: {
            'Toxic Affinity': 'Resistant',
            Amphibian: 'Resilient',
          },
        },
        to: {
          stage: 2,
          number: 9,
          name: 'Platimous',
          level: 20,
          type: 'levels',
          trading: false,
          traits: ['Zen', 'Determined'],
          traitMapping: {
            Zen: 'Zen',
            Determined: 'Determined',
          },
        },
        number: 8,
        name: 'Platox',
        level: 20,
        trading: false,
        traits: ['Resistant', 'Resilient'],
        traitMapping: {
          Resistant: 'Zen',
          Resilient: 'Determined',
        },
      },
      wikiPortraitUrlLarge: 'https://temtem.wiki.gg',
      lumaWikiPortraitUrlLarge: 'https://temtem.wiki.gg',
      locations: [
        {
          location: 'Saipark',
          place: 'Saipark',
          note: '',
          island: 'Deniz',
          frequency: '50%',
          level: '37 - 40',
          freetem: {
            minLevel: 37,
            maxLevel: 40,
            minPansuns: 116,
            maxPansuns: 123,
          },
        },
        {
          location: 'Sillaro River',
          place: 'Sillaro River',
          note: '',
          island: 'Deniz',
          frequency: '15%',
          level: '40 - 45',
          freetem: {
            minLevel: 40,
            maxLevel: 45,
            minPansuns: 123,
            maxPansuns: 136,
          },
        },
        {
          location: "Sea-Queen's Aquarium",
          place: '',
          note: '',
          island: 'Deniz',
          frequency: '10%',
          level: '15 - 20',
          freetem: {
            minLevel: 15,
            maxLevel: 20,
            minPansuns: 59,
            maxPansuns: 72,
          },
        },
      ],
      icon: '/images/portraits/temtem/large/Platox.png',
      lumaIcon: '/images/portraits/temtem/luma/large/Platox.png',
      genderRatio: {
        male: 50,
        female: 50,
      },
      catchRate: 105,
      hatchMins: 24,
      tvYields: {
        hp: 0,
        sta: 0,
        spd: 1,
        atk: 0,
        def: 0,
        spatk: 1,
        spdef: 0,
      },
      gameDescription:
        'Platox share common ancestors with Saipat, but the species diverged centuries ago. While Saipat developed opposable thumbs, Platox specialized in surviving polluted environments. Today they are the most successful feathered Temtem of Tucma.',
      wikiRenderStaticUrl:
        'https://temtem.wiki.gg/images/d/d0/Platox_full_render.png',
      wikiRenderAnimatedUrl:
        'https://temtem.wiki.gg/images/b/bb/Platox_idle_animation.gif',
      wikiRenderStaticLumaUrl:
        'https://temtem.wiki.gg/images/f/fe/LumaPlatox_full_render.png',
      wikiRenderAnimatedLumaUrl:
        'https://temtem.wiki.gg/images/c/cf/LumaPlatox_idle_animation.gif',
      renderStaticImage: '/images/renders/temtem/static/Platox.png',
      renderStaticLumaImage: '/images/renders/temtem/luma/static/Platox.png',
      renderAnimatedImage: '/images/renders/temtem/animated/Platox.gif',
      renderAnimatedLumaImage:
        '/images/renders/temtem/luma/animated/Platox.gif',
      weaknesses: {
        Neutral: 1,
        Fire: 0.5,
        Water: 0.25,
        Nature: 1,
        Electric: 2,
        Earth: 0.5,
        Mental: 1,
        Wind: 2,
        Digital: 1,
        Melee: 1,
        Crystal: 1,
        Toxic: 1,
      },
    },
    {
      number: 9,
      name: 'Platimous',
      types: ['Water', 'Toxic'],
      portraitWikiUrl:
        'https://temtem.wiki.gg/images/thumb/7/7f/Platimous.png/55px-Platimous.png',
      lumaPortraitWikiUrl: '',
      wikiUrl: 'https://temtem.wiki.gg/wiki/Platimous',
      stats: {
        hp: 73,
        sta: 49,
        spd: 82,
        atk: 56,
        def: 39,
        spatk: 93,
        spdef: 70,
        total: 462,
      },
      traits: [
        {
          name: 'Zen',
          wikiUrl: 'https://temtem.wiki.gg/wiki/Zen',
          description:
            'When getting an asleep status condition, gets DEF and SPDEF .',
          effect:
            'Zen gifts the holder with DEF and SPDEF upon being inflicted with the Asleep Condition.',
        },
        {
          name: 'Determined',
          wikiUrl: 'https://temtem.wiki.gg/wiki/Determined',
          description: 'Prevents negative stat stage changes.',
          effect:
            "Determined protects the holder's being inflicted with negative stat stage changes.",
        },
      ],
      details: {
        height: {
          cm: 190,
          inches: 74,
        },
        weight: {
          kg: 107,
          lbs: 235,
        },
      },
      techniques: [
        {
          name: 'Finbeat',
          source: 'Levelling',
          levels: 1,
        },
        {
          name: 'Water Blade',
          source: 'Levelling',
          levels: 3,
        },
        {
          name: 'Venomous Claws',
          source: 'Levelling',
          levels: 4,
        },
        {
          name: 'Sand Splatter',
          source: 'Levelling',
          levels: 7,
        },
        {
          name: 'Cheer Up',
          source: 'Levelling',
          levels: 9,
        },
        {
          name: 'Aqua Bullet Hell',
          source: 'Levelling',
          levels: 14,
        },
        {
          name: 'Toxic Fang',
          source: 'Levelling',
          levels: 18,
        },
        {
          name: 'Tsunami',
          source: 'Levelling',
          levels: 34,
        },
        {
          name: 'Paralyzing Poison',
          source: 'Levelling',
          levels: 40,
        },
        {
          name: 'Toxin Shower',
          source: 'Levelling',
          levels: 58,
        },
        {
          name: 'Aquatic Whirlwind',
          source: 'Levelling',
          levels: 70,
        },
        {
          name: 'Rotten Goo',
          source: 'Levelling',
          levels: 84,
        },
        {
          name: 'Misogi',
          source: 'TechniqueCourses',
        },
        {
          name: 'Noxious Bomb',
          source: 'TechniqueCourses',
        },
        {
          name: 'Rend',
          source: 'TechniqueCourses',
        },
        {
          name: 'Footwork',
          source: 'TechniqueCourses',
        },
        {
          name: 'Held Anger',
          source: 'TechniqueCourses',
        },
        {
          name: 'Major Slash',
          source: 'TechniqueCourses',
        },
        {
          name: 'Sanative Rain',
          source: 'TechniqueCourses',
        },
        {
          name: 'Antitoxins',
          source: 'Breeding',
        },
        {
          name: 'Flood',
          source: 'Breeding',
        },
        {
          name: 'Sharp Rain',
          source: 'Breeding',
        },
        {
          name: 'Urushiol',
          source: 'Breeding',
        },
      ],
      trivia: [
        'Platimous is a Breeder Tier Temtem by PokéNinja, who pledged $6000 to the Kickstarter. It was drawn by 50 Shades of Heliolisk. Crema and PokéNinja obtained the rights to add Platypet, Platox and Platimous to the game.',
        "Platimous' Luma color was chosen based on a community vote by PokéNinja.",
      ],
      evolution: {
        stage: 2,
        evolutionTree: [
          {
            stage: 0,
            number: 7,
            name: 'Platypet',
            level: 0,
            type: 'levels',
            trading: false,
            traits: ['Toxic Affinity', 'Amphibian'],
            traitMapping: {
              'Toxic Affinity': 'Resistant',
              Amphibian: 'Resilient',
            },
          },
          {
            stage: 1,
            number: 8,
            name: 'Platox',
            level: 20,
            type: 'levels',
            trading: false,
            traits: ['Resistant', 'Resilient'],
            traitMapping: {
              Resistant: 'Zen',
              Resilient: 'Determined',
            },
          },
          {
            stage: 2,
            number: 9,
            name: 'Platimous',
            level: 20,
            type: 'levels',
            trading: false,
            traits: ['Zen', 'Determined'],
            traitMapping: {
              Zen: 'Zen',
              Determined: 'Determined',
            },
          },
        ],
        evolves: true,
        type: 'levels',
        from: {
          stage: 1,
          number: 8,
          name: 'Platox',
          level: 20,
          type: 'levels',
          trading: false,
          traits: ['Resistant', 'Resilient'],
          traitMapping: {
            Resistant: 'Zen',
            Resilient: 'Determined',
          },
        },
        to: null,
        number: 9,
        name: 'Platimous',
        level: 20,
        trading: false,
        traits: ['Zen', 'Determined'],
        traitMapping: {
          Zen: 'Zen',
          Determined: 'Determined',
        },
      },
      wikiPortraitUrlLarge: 'https://temtem.wiki.gg',
      lumaWikiPortraitUrlLarge: 'https://temtem.wiki.gg',
      locations: [
        {
          location: "Dabmis' Rest",
          place: '',
          note: '',
          island: 'Deniz',
          frequency: '95%',
          level: '70',
          freetem: {
            minLevel: 70,
            maxLevel: 70,
            minPansuns: null,
            maxPansuns: null,
          },
        },
      ],
      icon: '/images/portraits/temtem/large/Platimous.png',
      lumaIcon: '/images/portraits/temtem/luma/large/Platimous.png',
      genderRatio: {
        male: 50,
        female: 50,
      },
      catchRate: 0,
      hatchMins: 45,
      tvYields: {
        hp: 0,
        sta: 0,
        spd: 2,
        atk: 0,
        def: 0,
        spatk: 2,
        spdef: 0,
      },
      gameDescription:
        'Charles Temwin described them as "Platox, but more so". This is usually taken as classic Arburian understatement: Platimous were amongst the most successful apex predators before large-scale taming, and remain very effective fighters.',
      wikiRenderStaticUrl:
        'https://temtem.wiki.gg/images/e/e9/Platimous_full_render.png',
      wikiRenderAnimatedUrl:
        'https://temtem.wiki.gg/images/a/a8/Platimous_idle_animation.gif',
      wikiRenderStaticLumaUrl:
        'https://temtem.wiki.gg/images/d/d7/LumaPlatimous_full_render.png',
      wikiRenderAnimatedLumaUrl:
        'https://temtem.wiki.gg/images/3/36/LumaPlatimous_idle_animation.gif',
      renderStaticImage: '/images/renders/temtem/static/Platimous.png',
      renderStaticLumaImage: '/images/renders/temtem/luma/static/Platimous.png',
      renderAnimatedImage: '/images/renders/temtem/animated/Platimous.gif',
      renderAnimatedLumaImage:
        '/images/renders/temtem/luma/animated/Platimous.gif',
      weaknesses: {
        Neutral: 1,
        Fire: 0.5,
        Water: 0.25,
        Nature: 1,
        Electric: 2,
        Earth: 0.5,
        Mental: 1,
        Wind: 2,
        Digital: 1,
        Melee: 1,
        Crystal: 1,
        Toxic: 1,
      },
    },
    {
      number: 10,
      name: 'Swali',
      types: ['Nature'],
      portraitWikiUrl:
        'https://temtem.wiki.gg/images/thumb/8/8a/Swali.png/55px-Swali.png',
      lumaPortraitWikiUrl: '',
      wikiUrl: 'https://temtem.wiki.gg/wiki/Swali',
      stats: {
        hp: 44,
        sta: 65,
        spd: 35,
        atk: 50,
        def: 40,
        spatk: 55,
        spdef: 60,
        total: 349,
      },
      traits: [
        {
          name: 'Shared Pain',
          wikiUrl: 'https://temtem.wiki.gg/wiki/Shared_Pain',
          description:
            'After receiving a rival attack, the next one during the same turn gets redirected to the ally.',
          effect:
            'Shared Pain protects the holder from receiving damage from a second attack from the rival team that turn by redirecting it to their ally.',
        },
        {
          name: 'Mithridatism',
          wikiUrl: 'https://temtem.wiki.gg/wiki/Mithridatism',
          description:
            'Prevents the poisoned status condition and reduces damage taken from Toxic Techniques by 20%.',
          effect:
            'Mithridatism protects the holder from being inflicted with the Poisoned Condition and decreases damage taken from Toxic Techniques by 20%.',
        },
      ],
      details: {
        height: {
          cm: 82,
          inches: 32,
        },
        weight: {
          kg: 18,
          lbs: 39,
        },
      },
      techniques: [
        {
          name: 'Shy Shield',
          source: 'Levelling',
          levels: 1,
        },
        {
          name: 'Tenderness',
          source: 'Levelling',
          levels: 2,
        },
        {
          name: 'Urushiol',
          source: 'Levelling',
          levels: 5,
        },
        {
          name: 'Toxic Spores',
          source: 'Levelling',
          levels: 14,
        },
        {
          name: 'Nimble',
          source: 'Levelling',
          levels: 19,
        },
        {
          name: 'Photosynthesis',
          source: 'Levelling',
          levels: 25,
        },
        {
          name: 'Bark Shield',
          source: 'Levelling',
          levels: 35,
        },
        {
          name: 'Allergic Spread',
          source: 'Levelling',
          levels: 44,
        },
        {
          name: 'Turbo Choreography',
          source: 'TechniqueCourses',
        },
        {
          name: 'Wake Up',
          source: 'TechniqueCourses',
        },
        {
          name: 'Misogi',
          source: 'TechniqueCourses',
        },
        {
          name: 'Hypoxia',
          source: 'Breeding',
        },
        {
          name: 'Spores',
          source: 'Breeding',
        },
      ],
      trivia: [
        "Swali was shown for the first time on iNinjaHero's 08/08/2018 Twitch stream, during his visit to Crema HQ.",
        "Swali's description and in-game footage was first shown on the official Temtem Twitter.",
      ],
      evolution: {
        stage: 0,
        evolutionTree: [
          {
            stage: 0,
            number: 10,
            name: 'Swali',
            level: 0,
            type: 'levels',
            trading: false,
            traits: ['Shared Pain', 'Mithridatism'],
            traitMapping: {
              'Shared Pain': 'Botanist',
              Mithridatism: 'Toxic Farewell',
            },
          },
          {
            stage: 1,
            number: 11,
            name: 'Loali',
            level: 8,
            type: 'levels',
            trading: false,
            traits: ['Botanist', 'Toxic Farewell'],
            traitMapping: {
              Botanist: 'Botanist',
              'Toxic Farewell': 'Toxic Farewell',
            },
          },
        ],
        evolves: true,
        type: 'levels',
        from: null,
        to: {
          stage: 1,
          number: 11,
          name: 'Loali',
          level: 8,
          type: 'levels',
          trading: false,
          traits: ['Botanist', 'Toxic Farewell'],
          traitMapping: {
            Botanist: 'Botanist',
            'Toxic Farewell': 'Toxic Farewell',
          },
        },
        number: 10,
        name: 'Swali',
        level: 0,
        trading: false,
        traits: ['Shared Pain', 'Mithridatism'],
        traitMapping: {
          'Shared Pain': 'Botanist',
          Mithridatism: 'Toxic Farewell',
        },
      },
      wikiPortraitUrlLarge: 'https://temtem.wiki.gg',
      lumaWikiPortraitUrlLarge: 'https://temtem.wiki.gg',
      locations: [
        {
          location: 'Prasine Coast',
          place: 'Prasine Coast',
          note: '',
          island: 'Deniz',
          frequency: '40%',
          level: '2 - 5',
          freetem: {
            minLevel: 2,
            maxLevel: 5,
            minPansuns: 23,
            maxPansuns: 27,
          },
        },
        {
          location: 'Thalassian Cliffs',
          place: 'Thalassian Cliffs',
          note: '',
          island: 'Deniz',
          frequency: '20% - 30%',
          level: '5 - 8',
          freetem: {
            minLevel: 5,
            maxLevel: 8,
            minPansuns: 27,
            maxPansuns: 31,
          },
        },
      ],
      icon: '/images/portraits/temtem/large/Swali.png',
      lumaIcon: '/images/portraits/temtem/luma/large/Swali.png',
      genderRatio: {
        male: 50,
        female: 50,
      },
      catchRate: 200,
      hatchMins: 5,
      tvYields: {
        hp: 0,
        sta: 1,
        spd: 0,
        atk: 0,
        def: 0,
        spatk: 0,
        spdef: 0,
      },
      gameDescription:
        'When the harvest season is on, Omninesian fruit-pickers are always careful not to accidentally damage the delicate, chrysalis-like Swali. They grow on certain vines of the rainforest canopy, dropping to the jungle floor once mature and mobile.',
      wikiRenderStaticUrl:
        'https://temtem.wiki.gg/images/e/ed/Swali_full_render.png',
      wikiRenderAnimatedUrl:
        'https://temtem.wiki.gg/images/f/f2/Swali_idle_animation.gif',
      wikiRenderStaticLumaUrl:
        'https://temtem.wiki.gg/images/7/79/LumaSwali_full_render.png',
      wikiRenderAnimatedLumaUrl:
        'https://temtem.wiki.gg/images/e/ea/LumaSwali_idle_animation.gif',
      renderStaticImage: '/images/renders/temtem/static/Swali.png',
      renderStaticLumaImage: '/images/renders/temtem/luma/static/Swali.png',
      renderAnimatedImage: '/images/renders/temtem/animated/Swali.gif',
      renderAnimatedLumaImage: '/images/renders/temtem/luma/animated/Swali.gif',
      weaknesses: {
        Neutral: 1,
        Fire: 2,
        Water: 0.5,
        Nature: 0.5,
        Electric: 0.5,
        Earth: 0.5,
        Mental: 1,
        Wind: 1,
        Digital: 1,
        Melee: 1,
        Crystal: 1,
        Toxic: 2,
      },
    },
    {
      number: 11,
      name: 'Loali',
      types: ['Nature', 'Wind'],
      portraitWikiUrl:
        'https://temtem.wiki.gg/images/thumb/0/0c/Loali.png/55px-Loali.png',
      lumaPortraitWikiUrl: '',
      wikiUrl: 'https://temtem.wiki.gg/wiki/Loali',
      stats: {
        hp: 55,
        sta: 80,
        spd: 80,
        atk: 60,
        def: 50,
        spatk: 70,
        spdef: 90,
        total: 485,
      },
      traits: [
        {
          name: 'Botanist',
          wikiUrl: 'https://temtem.wiki.gg/wiki/Botanist',
          description:
            'Damage done with Nature techniques is increased by 15%.',
          effect:
            "Botanist increases the damage of the holder's Nature Techniques by 15%.",
        },
        {
          name: 'Toxic Farewell',
          wikiUrl: 'https://temtem.wiki.gg/wiki/Toxic_Farewell',
          description:
            'When knocked-out, the attacker loses 10% of max HP and gets poisoned for 3 turns.',
          effect:
            'Toxic Farewell inflicts the attacker that knocked-out the holder with the Poisoned Condition for 3 turns and they lose 10% of their maximum HP.',
        },
      ],
      details: {
        height: {
          cm: 60,
          inches: 23,
        },
        weight: {
          kg: 14,
          lbs: 30,
        },
      },
      techniques: [
        {
          name: 'Shy Shield',
          source: 'Levelling',
          levels: 1,
        },
        {
          name: 'Tenderness',
          source: 'Levelling',
          levels: 2,
        },
        {
          name: 'Urushiol',
          source: 'Levelling',
          levels: 5,
        },
        {
          name: 'Wind Blade',
          source: 'Levelling',
          levels: 11,
        },
        {
          name: 'Toxic Spores',
          source: 'Levelling',
          levels: 14,
        },
        {
          name: 'Nimble',
          source: 'Levelling',
          levels: 19,
        },
        {
          name: 'Photosynthesis',
          source: 'Levelling',
          levels: 25,
        },
        {
          name: 'Blizzard',
          source: 'Levelling',
          levels: 25,
        },
        {
          name: 'Bark Shield',
          source: 'Levelling',
          levels: 35,
        },
        {
          name: 'Allergic Spread',
          source: 'Levelling',
          levels: 44,
        },
        {
          name: 'Resin Trap',
          source: 'Levelling',
          levels: 55,
        },
        {
          name: 'Gust',
          source: 'Levelling',
          levels: 77,
        },
        {
          name: 'Plague',
          source: 'Levelling',
          levels: 94,
        },
        {
          name: 'Turbo Choreography',
          source: 'TechniqueCourses',
        },
        {
          name: 'Wake Up',
          source: 'TechniqueCourses',
        },
        {
          name: 'Misogi',
          source: 'TechniqueCourses',
        },
        {
          name: 'Refresh',
          source: 'TechniqueCourses',
        },
        {
          name: 'Restore',
          source: 'TechniqueCourses',
        },
        {
          name: 'Hypoxia',
          source: 'Breeding',
        },
        {
          name: 'Spores',
          source: 'Breeding',
        },
      ],
      trivia: [
        'In Temtem lore, it is the symbol of peace and harmony.',
        'Loali was first reveled on Twitter and was recolored many times before the final look was chosen, as depicted in its concept art.',
        'Loali has an emote on the official Temtem Discord.',
      ],
      evolution: {
        stage: 1,
        evolutionTree: [
          {
            stage: 0,
            number: 10,
            name: 'Swali',
            level: 0,
            type: 'levels',
            trading: false,
            traits: ['Shared Pain', 'Mithridatism'],
            traitMapping: {
              'Shared Pain': 'Botanist',
              Mithridatism: 'Toxic Farewell',
            },
          },
          {
            stage: 1,
            number: 11,
            name: 'Loali',
            level: 8,
            type: 'levels',
            trading: false,
            traits: ['Botanist', 'Toxic Farewell'],
            traitMapping: {
              Botanist: 'Botanist',
              'Toxic Farewell': 'Toxic Farewell',
            },
          },
        ],
        evolves: true,
        type: 'levels',
        from: {
          stage: 0,
          number: 10,
          name: 'Swali',
          level: 0,
          type: 'levels',
          trading: false,
          traits: ['Shared Pain', 'Mithridatism'],
          traitMapping: {
            'Shared Pain': 'Botanist',
            Mithridatism: 'Toxic Farewell',
          },
        },
        to: null,
        number: 11,
        name: 'Loali',
        level: 8,
        trading: false,
        traits: ['Botanist', 'Toxic Farewell'],
        traitMapping: {
          Botanist: 'Botanist',
          'Toxic Farewell': 'Toxic Farewell',
        },
      },
      wikiPortraitUrlLarge: 'https://temtem.wiki.gg',
      lumaWikiPortraitUrlLarge: 'https://temtem.wiki.gg',
      locations: [
        {
          location: 'The Canopath',
          place: 'The Canopath',
          note: '',
          island: 'Omninesia',
          frequency: '20%',
          level: '16 - 19',
          freetem: {
            minLevel: 16,
            maxLevel: 19,
            minPansuns: 51,
            maxPansuns: 57,
          },
        },
        {
          location: 'The Flywalk',
          place: 'The Flywalk',
          note: '',
          island: 'Omninesia',
          frequency: '30% - 50%',
          level: '18 - 25',
          freetem: {
            minLevel: 18,
            maxLevel: 25,
            minPansuns: 55,
            maxPansuns: 69,
          },
        },
        {
          location: 'The Hangroad',
          place: 'The Hangroad',
          note: '',
          island: 'Omninesia',
          frequency: '20%',
          level: '15 - 20',
          freetem: {
            minLevel: 15,
            maxLevel: 20,
            minPansuns: 49,
            maxPansuns: 59,
          },
        },
        {
          location: 'The Glassyway',
          place: 'The Glassyway',
          note: '',
          island: 'Omninesia',
          frequency: '80%',
          level: '19 - 22',
          freetem: {
            minLevel: 19,
            maxLevel: 22,
            minPansuns: 57,
            maxPansuns: 63,
          },
        },
        {
          location: 'Mines of Mictlan',
          place: 'Mines of Mictlan',
          note: '',
          island: 'Tucma',
          frequency: 'Gift',
          level: '38',
          freetem: {
            minLevel: 38,
            maxLevel: 38,
            minPansuns: 94,
            maxPansuns: 94,
          },
        },
      ],
      icon: '/images/portraits/temtem/large/Loali.png',
      lumaIcon: '/images/portraits/temtem/luma/large/Loali.png',
      genderRatio: {
        male: 50,
        female: 50,
      },
      catchRate: 140,
      hatchMins: 17,
      tvYields: {
        hp: 0,
        sta: 1,
        spd: 1,
        atk: 0,
        def: 0,
        spatk: 0,
        spdef: 0,
      },
      gameDescription:
        'Delicate and graceful creatures, Loali are all wings and eyes - and natural charmers. Their hypnotic eyes can completely dazzle their enemies and their constantly fluttering wings allow them to change course in an instant.',
      wikiRenderStaticUrl:
        'https://temtem.wiki.gg/images/1/1f/Loali_full_render.png',
      wikiRenderAnimatedUrl:
        'https://temtem.wiki.gg/images/6/6f/Loali_idle_animation.gif',
      wikiRenderStaticLumaUrl:
        'https://temtem.wiki.gg/images/9/97/LumaLoali_full_render.png',
      wikiRenderAnimatedLumaUrl:
        'https://temtem.wiki.gg/images/6/65/LumaLoali_idle_animation.gif',
      renderStaticImage: '/images/renders/temtem/static/Loali.png',
      renderStaticLumaImage: '/images/renders/temtem/luma/static/Loali.png',
      renderAnimatedImage: '/images/renders/temtem/animated/Loali.gif',
      renderAnimatedLumaImage: '/images/renders/temtem/luma/animated/Loali.gif',
      weaknesses: {
        Neutral: 1,
        Fire: 2,
        Water: 0.5,
        Nature: 0.5,
        Electric: 1,
        Earth: 0.25,
        Mental: 1,
        Wind: 0.5,
        Digital: 1,
        Melee: 1,
        Crystal: 1,
        Toxic: 2,
      },
    },
  ];
  filteredTemTems: ITemTem[] = [];

  performFilter(filterBy: string): ITemTem[] {
    filterBy = filterBy.toLocaleLowerCase();

    return this.temTems.filter((temTem: ITemTem) =>
      temTem.name.toLocaleLowerCase().includes(filterBy)
    );
  }
  ngOnInit(): void {}
}
