[Skip to content](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill/tree/main/src/ui-ux-pro-max#start-of-content)

You signed in with another tab or window. [Reload](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill/tree/main/src/ui-ux-pro-max) to refresh your session.You signed out in another tab or window. [Reload](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill/tree/main/src/ui-ux-pro-max) to refresh your session.You switched accounts on another tab or window. [Reload](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill/tree/main/src/ui-ux-pro-max) to refresh your session.Dismiss alert

{{ message }}

[nextlevelbuilder](https://github.com/nextlevelbuilder)/ **[ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill)** Public

- [Notifications](https://github.com/login?return_to=%2Fnextlevelbuilder%2Fui-ux-pro-max-skill) You must be signed in to change notification settings
- [Fork\\
3.7k](https://github.com/login?return_to=%2Fnextlevelbuilder%2Fui-ux-pro-max-skill)
- [Star\\
38.7k](https://github.com/login?return_to=%2Fnextlevelbuilder%2Fui-ux-pro-max-skill)


## Collapse file tree

## Files

main

Search this repository

/

# ui-ux-pro-max

/

Copy path

## Directory actions

## More options

More options

## Directory actions

## More options

More options

## Latest commit

![sappan](https://avatars.githubusercontent.com/u/42715919?v=4&size=40)![factory-droid[bot]](https://avatars.githubusercontent.com/in/358017?v=4&size=40)

[sappan](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill/commits?author=sappan)

and

[factory-droid\[bot\]](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill/commits?author=factory-droid%5Bbot%5D)

[feat: add Droid (Factory) support](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill/commit/2127b8b9b00d58894304a600c9c743a76c1564b3)

Open commit details

last monthFeb 2, 2026

[2127b8b](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill/commit/2127b8b9b00d58894304a600c9c743a76c1564b3) · last monthFeb 2, 2026

## History

[History](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill/commits/main/src/ui-ux-pro-max)

Open commit details

[View commit history for this file.](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill/commits/main/src/ui-ux-pro-max) History

/

# ui-ux-pro-max

/

Top

## Folders and files

| Name | Name | Last commit message | Last commit date |
| --- | --- | --- | --- |
| ### parent directory<br> [..](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill/tree/main/src) |
| [data](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill/tree/main/src/ui-ux-pro-max/data "data") | [data](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill/tree/main/src/ui-ux-pro-max/data "data") | [feat: reorganize codebase with single source of truth + merge prompts…](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill/commit/b2a05eceeb45e3568bb9c60d1af699cdff6791bd "feat: reorganize codebase with single source of truth + merge prompts into styles (#116)  BREAKING CHANGES: - Moved canonical data/scripts to src/ui-ux-pro-max/ - Removed duplicate folders (.codex/, .gemini/, .trae/, .codebuddy/, .continue/, skills/, .qoder/) - CLI now uses template system instead of copying pre-built folders  New features: - Merged prompts.csv into styles.csv with 4 new columns:   - AI Prompt Keywords   - CSS/Technical Keywords   - Implementation Checklist   - Design System Variables - All 67 styles now have complete prompt data - Added Astro stack (53 guidelines) - Added 10 new 2025 UI trend styles  CLI changes: - New template rendering system (cli/src/utils/template.ts) - Reduced cli/assets from ~34MB to ~564KB - Assets now contain only: data/, scripts/, templates/  File structure: - src/ui-ux-pro-max/ - Single source of truth - .claude/skills/ - Symlinks to src/ for development - .shared/ - Symlink to src/ui-ux-pro-max/  Bumped CLI version: 2.1.3 → 2.2.0  Co-authored-by: Claude Opus 4.5 <noreply@anthropic.com>") | 2 months agoJan 22, 2026 |
| [scripts](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill/tree/main/src/ui-ux-pro-max/scripts "scripts") | [scripts](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill/tree/main/src/ui-ux-pro-max/scripts "scripts") | [fix: Windows Unicode encoding error for emoji characters](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill/commit/402c49a2839064033cf553c78773e5372e26433f "fix: Windows Unicode encoding error for emoji characters  Force UTF-8 encoding for stdout/stderr in search.py to handle emoji characters (⚡, ✓) on Windows systems that default to cp1252.  Fixes UnicodeEncodeError: 'charmap' codec can't encode character  - Bump CLI version to 2.2.3  Co-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>") | 2 months agoJan 29, 2026 |
| [templates](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill/tree/main/src/ui-ux-pro-max/templates "templates") | [templates](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill/tree/main/src/ui-ux-pro-max/templates "templates") | [feat: add Droid (Factory) support](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill/commit/2127b8b9b00d58894304a600c9c743a76c1564b3 "feat: add Droid (Factory) support  Add support for Factory's Droid AI assistant, allowing users to install the skill via 'uipro init --ai droid' to .factory/skills/ directory.  Changes: - Add droid.json platform config (src and cli/assets) - Add 'droid' to AIType and AI_TYPES array - Add .factory directory detection - Add droid to AI_TO_PLATFORM mapping  Co-authored-by: factory-droid[bot] <138933559+factory-droid[bot]@users.noreply.github.com>") | last monthFeb 2, 2026 |
| View all files |

You can’t perform that action at this time.