# Blog Maintenance Guide

## Overview
Your blog now uses an embedded data system that makes adding new content super easy! Just edit the blog data in your HTML file.

## How to Add New Blog Posts

### 1. Edit the HTML File
Open `/Users/taiwoheard/Documents/Website July/scribbles.html` and find the `blogData` variable (around line 680). Add a new post to the `posts` array:

```json
{
  "id": 3,
  "title": "Your New Post Title",
  "date": "Published on Medium",
  "readTime": "5 min read",
  "excerpt": "A compelling description of your post that will appear on the blog page...",
  "image": "https://images.unsplash.com/photo-xxxxx",
  "imageAlt": "Description of the image",
  "tags": ["Tag1", "Tag2", "Tag3"],
  "link": "https://your-article-link.com",
  "external": true
}
```

### 2. That's It!
Save the HTML file and refresh your webpage. The new post will automatically appear!

**Note:** The blog data is now embedded directly in the HTML file to avoid CORS issues when opening the file directly in browsers.

## JSON Field Explanations

- **id**: Unique number for each post (increment from last post)
- **title**: The post title
- **date**: Publication date/source (e.g., "Published on Medium", "March 15, 2024")
- **readTime**: Estimated reading time (e.g., "5 min read")
- **excerpt**: Brief description/preview of the post
- **image**: URL to header image (Unsplash URLs work great)
- **imageAlt**: Alt text for the image (for accessibility)
- **tags**: Array of relevant tags/categories
- **link**: URL where the full post can be read
- **external**: true for external links (opens in new tab), false for internal

## Example: Adding a New Post

```javascript
const blogData = {
  "posts": [
    // ... existing posts ...
    {
      "id": 3,
      "title": "Building a Music Production Workflow with Code",
      "date": "March 15, 2024",
      "readTime": "12 min read",
      "excerpt": "How I automated my music production workflow using Python scripts and MIDI controllers. A deep dive into bridging the gap between technical skills and creative output.",
      "image": "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=300&fit=crop",
      "imageAlt": "Music production setup with computer and MIDI controller",
      "tags": ["Music Production", "Python", "Automation", "Workflow"],
      "link": "https://taiheard.medium.com/music-production-workflow-code",
      "external": true
    }
  ]
};
```

## Benefits of This System

✅ **Easy to maintain** - Just edit the data object in HTML  
✅ **No CORS issues** - Works when opening files directly  
✅ **Version control friendly** - Easy to track changes  
✅ **Scalable** - Can easily add dozens of posts  
✅ **Self-contained** - Everything in one file  
✅ **Error resistant** - Malformed data will show an error instead of breaking the site

## Testing Your Changes

1. Open your website: `http://localhost:8000/scribbles.html`
2. Check the browser console (F12) for any JSON errors
3. Verify new posts appear and stats are updated

## Troubleshooting

**Posts not loading?**
- Check if JSON is valid using a JSON validator online
- Check browser console for error messages
- Ensure image URLs are accessible

**Styling issues?**
- All styling is handled automatically
- Long titles/excerpts will wrap naturally
- Images are automatically cropped to fit