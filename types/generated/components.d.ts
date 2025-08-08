import type { Schema, Struct } from '@strapi/strapi';

export interface AboutSection2 extends Struct.ComponentSchema {
  collectionName: 'components_about_section2s';
  info: {
    displayName: 'Section2';
  };
  attributes: {
    slidingText: Schema.Attribute.Component<'about.sliding-text', true>;
    Text: Schema.Attribute.Text;
  };
}

export interface AboutSlider extends Struct.ComponentSchema {
  collectionName: 'components_about_sliders';
  info: {
    displayName: 'Slider';
  };
  attributes: {
    Images: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

export interface AboutSlidingText extends Struct.ComponentSchema {
  collectionName: 'components_about_sliding_texts';
  info: {
    displayName: 'slidingText';
  };
  attributes: {
    Text: Schema.Attribute.Text;
  };
}

export interface AboutTeam extends Struct.ComponentSchema {
  collectionName: 'components_about_teams';
  info: {
    displayName: 'Team';
  };
  attributes: {
    Contact: Schema.Attribute.Component<'footer.social-link', true>;
    Description: Schema.Attribute.Text;
    FirstName: Schema.Attribute.String;
    LastName: Schema.Attribute.String;
    LeftImage: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Portfolio: Schema.Attribute.String;
    ProfileImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    RightImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    TagLine: Schema.Attribute.Text;
  };
}

export interface BlogBlogContent extends Struct.ComponentSchema {
  collectionName: 'components_blog_blog_contents';
  info: {
    displayName: 'All-Blogs';
  };
  attributes: {
    Blog_Content: Schema.Attribute.Component<'blog.content', true>;
    Blog_Title_1: Schema.Attribute.Text;
    Blog_Title_2: Schema.Attribute.Text;
    Header_Image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    Social: Schema.Attribute.Component<'footer.social-link', true>;
  };
}

export interface BlogContent extends Struct.ComponentSchema {
  collectionName: 'components_blog_contents';
  info: {
    displayName: 'Content';
  };
  attributes: {
    Description: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    Title: Schema.Attribute.Text;
  };
}

export interface BuzzAnnouncements extends Struct.ComponentSchema {
  collectionName: 'components_buzz_announcements';
  info: {
    displayName: 'Announcements';
  };
  attributes: {
    Announcement_Description_1: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    Announcement_Description_2: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    Heading1: Schema.Attribute.String;
    Heading2: Schema.Attribute.Text;
    Images: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

export interface BuzzAwards extends Struct.ComponentSchema {
  collectionName: 'components_buzz_awards';
  info: {
    displayName: 'Awards';
  };
  attributes: {
    All_Awards: Schema.Attribute.Component<'buzz.awards-list', true>;
    Heading: Schema.Attribute.String;
  };
}

export interface BuzzAwardsList extends Struct.ComponentSchema {
  collectionName: 'components_buzz_awards_lists';
  info: {
    displayName: 'Awards-List';
  };
  attributes: {
    Description: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    Image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Title: Schema.Attribute.Text;
  };
}

export interface BuzzTeamAction extends Struct.ComponentSchema {
  collectionName: 'components_buzz_team_actions';
  info: {
    displayName: 'Team-Action';
  };
  attributes: {
    Description: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    Heading: Schema.Attribute.String;
    Image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface CaseStudyAllCaseStudy extends Struct.ComponentSchema {
  collectionName: 'components_case_study_all_case_studies';
  info: {
    displayName: 'All-Case-Study';
  };
  attributes: {
    Case_Study_Media: Schema.Attribute.Component<
      'case-study.case-study-media',
      false
    >;
    Channels: Schema.Attribute.Component<'case-study.channels', true>;
    Content: Schema.Attribute.Component<'case-study.content', false>;
    Heading1: Schema.Attribute.Text;
    Heading2: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    Integrated_Services: Schema.Attribute.Component<
      'case-study.integrated-services',
      true
    >;
    Projects: Schema.Attribute.Component<'case-study.study-blocks', true>;
  };
}

export interface CaseStudyCaseStudyMedia extends Struct.ComponentSchema {
  collectionName: 'components_case_study_case_study_medias';
  info: {
    displayName: 'Case-Study-Media';
  };
  attributes: {
    Media: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Title: Schema.Attribute.String;
  };
}

export interface CaseStudyChannels extends Struct.ComponentSchema {
  collectionName: 'components_case_study_channels';
  info: {
    displayName: 'Channels';
  };
  attributes: {
    Channel: Schema.Attribute.Text;
  };
}

export interface CaseStudyContent extends Struct.ComponentSchema {
  collectionName: 'components_case_study_contents';
  info: {
    displayName: 'Content';
  };
  attributes: {
    approachText: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    approachTitle: Schema.Attribute.String;
    outcomeText: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    outcomeTitle: Schema.Attribute.String;
    situationText: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    situationTitle: Schema.Attribute.String;
    Stats: Schema.Attribute.Component<'case-study.stats', true>;
    Title: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
  };
}

export interface CaseStudyIntegratedServices extends Struct.ComponentSchema {
  collectionName: 'components_case_study_integrated_services';
  info: {
    displayName: 'Integrated-Services';
  };
  attributes: {
    Service: Schema.Attribute.Text;
  };
}

export interface CaseStudyStats extends Struct.ComponentSchema {
  collectionName: 'components_case_study_stats';
  info: {
    displayName: 'stats';
  };
  attributes: {
    value: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
  };
}

export interface CaseStudyStudyBlocks extends Struct.ComponentSchema {
  collectionName: 'components_case_study_study_blocks';
  info: {
    displayName: 'Study-Blocks';
  };
  attributes: {
    Image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Title: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
  };
}

export interface FooterAddress extends Struct.ComponentSchema {
  collectionName: 'components_footer_addresses';
  info: {
    displayName: 'address';
  };
  attributes: {
    city: Schema.Attribute.String;
    officeLocation: Schema.Attribute.String;
    state: Schema.Attribute.String;
    street: Schema.Attribute.String;
  };
}

export interface FooterLink extends Struct.ComponentSchema {
  collectionName: 'components_footer_links';
  info: {
    displayName: 'link';
  };
  attributes: {
    subTitle: Schema.Attribute.Component<'footer.sub-links', true>;
    title: Schema.Attribute.String;
  };
}

export interface FooterLocation extends Struct.ComponentSchema {
  collectionName: 'components_footer_locations';
  info: {
    displayName: 'location';
  };
  attributes: {
    address: Schema.Attribute.Component<'footer.address', true>;
    name: Schema.Attribute.String;
  };
}

export interface FooterSocialLink extends Struct.ComponentSchema {
  collectionName: 'components_footer_social_links';
  info: {
    displayName: 'social-link';
  };
  attributes: {
    platform: Schema.Attribute.Enumeration<
      [
        'Facebook',
        'Instagram',
        'LinkedIn',
        'YouTube',
        'Email',
        'Phone',
        'Pinterest',
      ]
    >;
    url: Schema.Attribute.String;
  };
}

export interface FooterSubLinks extends Struct.ComponentSchema {
  collectionName: 'components_footer_sub_links';
  info: {
    displayName: 'subLinks';
  };
  attributes: {
    title: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface FooterTermAndCondition extends Struct.ComponentSchema {
  collectionName: 'components_footer_term_and_conditions';
  info: {
    displayName: 'term-and-condition';
  };
  attributes: {
    copyright: Schema.Attribute.String;
    pages: Schema.Attribute.Component<'footer.sub-links', true>;
  };
}

export interface HeaderMenuItem extends Struct.ComponentSchema {
  collectionName: 'components_header_menu_items';
  info: {
    displayName: 'menu-item';
  };
  attributes: {
    submenuItems: Schema.Attribute.Component<'header.submenus', true>;
    title: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface HeaderSubmenus extends Struct.ComponentSchema {
  collectionName: 'components_header_submenus';
  info: {
    displayName: 'submenus';
  };
  attributes: {
    title: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface HomeHappeningData extends Struct.ComponentSchema {
  collectionName: 'components_home_happening_data';
  info: {
    displayName: 'Happening-Data';
  };
  attributes: {
    link: Schema.Attribute.Text;
    text: Schema.Attribute.Text;
  };
}

export interface HomeHappeningList extends Struct.ComponentSchema {
  collectionName: 'components_home_happening_lists';
  info: {
    displayName: 'Happening -List';
  };
  attributes: {
    Happening_List: Schema.Attribute.Component<'home.happening-data', true>;
    Title: Schema.Attribute.String;
  };
}

export interface HomeResults extends Struct.ComponentSchema {
  collectionName: 'components_home_results';
  info: {
    displayName: 'Results';
  };
  attributes: {
    Left_Column_Heading: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    Results_List: Schema.Attribute.Component<'home.results-list', true>;
  };
}

export interface HomeResultsList extends Struct.ComponentSchema {
  collectionName: 'components_home_results_lists';
  info: {
    displayName: 'Results-List';
  };
  attributes: {
    Case_Study_Link: Schema.Attribute.String;
    Heading: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    View_Button_Label: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
  };
}

export interface HomeSlider extends Struct.ComponentSchema {
  collectionName: 'components_home_sliders';
  info: {
    displayName: 'Slider';
  };
  attributes: {
    Left_Column_Background: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    Left_Column_Button_Label: Schema.Attribute.String;
    Left_Column_Button_Link: Schema.Attribute.String;
    Left_Column_Description: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    Left_Column_Heading: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    Right_Column_Background: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    Right_Column_Button_Label: Schema.Attribute.String;
    Right_Column_Button_Link: Schema.Attribute.String;
    Right_Column_Description: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    Right_Column_Heading: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
  };
}

export interface HomeWhatsHappening extends Struct.ComponentSchema {
  collectionName: 'components_home_whats_happenings';
  info: {
    displayName: 'Whats-Happening';
  };
  attributes: {
    Happening_List: Schema.Attribute.Component<'home.happening-list', true>;
    Heading: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
  };
}

export interface NewsAllNews extends Struct.ComponentSchema {
  collectionName: 'components_news_all_news';
  info: {
    displayName: 'All-News';
  };
  attributes: {
    Banner_Image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    Category: Schema.Attribute.String;
    Description: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    Description_Title: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    Feature_Image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    Tag_Line: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    Title: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
  };
}

export interface ServiceAllServices extends Struct.ComponentSchema {
  collectionName: 'components_service_all_services';
  info: {
    displayName: 'AllServices';
  };
  attributes: {
    Heading1: Schema.Attribute.String;
    Heading2: Schema.Attribute.String;
    Services: Schema.Attribute.Component<'service.service-name', true>;
  };
}

export interface ServiceServiceName extends Struct.ComponentSchema {
  collectionName: 'components_service_service_names';
  info: {
    displayName: 'ServicesName';
  };
  attributes: {
    buttonLabel: Schema.Attribute.String;
    buttonUrl: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    name: Schema.Attribute.String;
  };
}

export interface ServiceSlider extends Struct.ComponentSchema {
  collectionName: 'components_service_sliders';
  info: {
    displayName: 'Slider';
  };
  attributes: {
    ButtonLabel: Schema.Attribute.String;
    ButtonUrl: Schema.Attribute.String;
    Description: Schema.Attribute.Text;
    Heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Slider_Color_Code: Schema.Attribute.String;
  };
}

export interface TalentExecutiveSection5 extends Struct.ComponentSchema {
  collectionName: 'components_talent_executive_section5s';
  info: {
    displayName: 'Section5';
  };
  attributes: {
    Column1_Description: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    Column1_Heading: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    Column2_Button_Label: Schema.Attribute.String;
    Column2_Button_URL: Schema.Attribute.String;
    Column2_Description: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    Column2_Heading: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
  };
}

export interface TalentExecutiveSection6 extends Struct.ComponentSchema {
  collectionName: 'components_talent_executive_section6s';
  info: {
    displayName: 'Section6';
  };
  attributes: {
    Heading: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    Testimonial: Schema.Attribute.Component<
      'talent-executive.testimonial',
      true
    >;
  };
}

export interface TalentExecutiveTestimonial extends Struct.ComponentSchema {
  collectionName: 'components_talent_executive_testimonials';
  info: {
    displayName: 'Testimonial';
  };
  attributes: {
    Review: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
  };
}

export interface TalentOnDemandAllServices extends Struct.ComponentSchema {
  collectionName: 'components_talent_on_demand_all_services';
  info: {
    displayName: 'AllServices';
  };
  attributes: {
    Description: Schema.Attribute.Text;
    Heading: Schema.Attribute.String;
    ServicesName: Schema.Attribute.Component<'service.service-name', true>;
  };
}

export interface TalentOnDemandAllStories extends Struct.ComponentSchema {
  collectionName: 'components_talent_on_demand_all_stories';
  info: {
    displayName: 'All-Stories';
  };
  attributes: {
    Description_1: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    Description_2: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Link_label: Schema.Attribute.String;
    Link_URL: Schema.Attribute.String;
  };
}

export interface TalentOnDemandFaQs extends Struct.ComponentSchema {
  collectionName: 'components_talent_on_demand_fa_qs';
  info: {
    displayName: 'FAQs';
  };
  attributes: {
    Description: Schema.Attribute.Text;
    Heading: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
  };
}

export interface TalentOnDemandFaqSection extends Struct.ComponentSchema {
  collectionName: 'components_talent_on_demand_faq_sections';
  info: {
    displayName: 'FAQ-Section';
  };
  attributes: {
    Description: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    FAQ: Schema.Attribute.Component<'talent-on-demand.fa-qs', true>;
    Heading: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
  };
}

export interface TalentOnDemandSection5 extends Struct.ComponentSchema {
  collectionName: 'components_talent_on_demand_section5s';
  info: {
    displayName: 'Section5';
  };
  attributes: {
    Column1_Button_Label: Schema.Attribute.String;
    Column1_Button_URL: Schema.Attribute.String;
    Column1_Description: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    Column1_Heading: Schema.Attribute.String;
    Column2_Button_Label: Schema.Attribute.String;
    Column2_Button_URL: Schema.Attribute.String;
    Column2_Description: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    Column2_Heading: Schema.Attribute.String;
  };
}

export interface TalentOnDemandStories extends Struct.ComponentSchema {
  collectionName: 'components_talent_on_demand_stories';
  info: {
    displayName: 'Stories';
  };
  attributes: {
    All_Stories: Schema.Attribute.Component<
      'talent-on-demand.all-stories',
      true
    >;
    Description: Schema.Attribute.Text;
    Heading: Schema.Attribute.Text;
  };
}

export interface WorkWorkHistory extends Struct.ComponentSchema {
  collectionName: 'components_work_work_histories';
  info: {
    displayName: 'Work-History';
  };
  attributes: {
    ButtonLabel: Schema.Attribute.String;
    ButtonUrl: Schema.Attribute.String;
    Category: Schema.Attribute.String;
    Company_Tagline: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Results: Schema.Attribute.Text;
    Title: Schema.Attribute.Text;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'about.section2': AboutSection2;
      'about.slider': AboutSlider;
      'about.sliding-text': AboutSlidingText;
      'about.team': AboutTeam;
      'blog.blog-content': BlogBlogContent;
      'blog.content': BlogContent;
      'buzz.announcements': BuzzAnnouncements;
      'buzz.awards': BuzzAwards;
      'buzz.awards-list': BuzzAwardsList;
      'buzz.team-action': BuzzTeamAction;
      'case-study.all-case-study': CaseStudyAllCaseStudy;
      'case-study.case-study-media': CaseStudyCaseStudyMedia;
      'case-study.channels': CaseStudyChannels;
      'case-study.content': CaseStudyContent;
      'case-study.integrated-services': CaseStudyIntegratedServices;
      'case-study.stats': CaseStudyStats;
      'case-study.study-blocks': CaseStudyStudyBlocks;
      'footer.address': FooterAddress;
      'footer.link': FooterLink;
      'footer.location': FooterLocation;
      'footer.social-link': FooterSocialLink;
      'footer.sub-links': FooterSubLinks;
      'footer.term-and-condition': FooterTermAndCondition;
      'header.menu-item': HeaderMenuItem;
      'header.submenus': HeaderSubmenus;
      'home.happening-data': HomeHappeningData;
      'home.happening-list': HomeHappeningList;
      'home.results': HomeResults;
      'home.results-list': HomeResultsList;
      'home.slider': HomeSlider;
      'home.whats-happening': HomeWhatsHappening;
      'news.all-news': NewsAllNews;
      'service.all-services': ServiceAllServices;
      'service.service-name': ServiceServiceName;
      'service.slider': ServiceSlider;
      'talent-executive.section5': TalentExecutiveSection5;
      'talent-executive.section6': TalentExecutiveSection6;
      'talent-executive.testimonial': TalentExecutiveTestimonial;
      'talent-on-demand.all-services': TalentOnDemandAllServices;
      'talent-on-demand.all-stories': TalentOnDemandAllStories;
      'talent-on-demand.fa-qs': TalentOnDemandFaQs;
      'talent-on-demand.faq-section': TalentOnDemandFaqSection;
      'talent-on-demand.section5': TalentOnDemandSection5;
      'talent-on-demand.stories': TalentOnDemandStories;
      'work.work-history': WorkWorkHistory;
    }
  }
}
