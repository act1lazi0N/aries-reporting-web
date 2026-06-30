# Aries Minimal Ocean Frontend Folder

Folder này dùng để copy thẳng vào repo `aries-web`.

## Có gì bên trong

```txt
AGENTS.md                         # Bản AGENTS đã thêm F6 + Minimal Ocean Blue UI rules
CODEX_FRONTEND_SKILLS.md           # Bản gộp toàn bộ skill cho Codex
.codex/skills/*/SKILL.md           # Skill riêng cho Codex
snippets/globals.css               # Token màu Minimal Ocean Blue
snippets/tailwind.config.colors.ts # Đoạn colors để dán vào tailwind.config.ts
snippets/status-style.ts           # Helper class cho transaction status badge
```

## Cách dùng nhanh

1. Copy `AGENTS.md` vào root repo `aries-web/`.
2. Copy `.codex/skills/` vào root repo nếu dùng Codex skill.
3. Dán nội dung `snippets/globals.css` vào `app/globals.css` hoặc file global CSS hiện tại.
4. Dán object trong `snippets/tailwind.config.colors.ts` vào `theme.extend.colors`.
5. Khi yêu cầu Codex code frontend, nhắc: `Read AGENTS.md and use minimal-ocean-style skill.`

## Style đã khóa

- Minimal banking/admin dashboard.
- Màu chính: bright ocean blue `#0EA5E9`.
- Không hardcode `blue-500`, `red-500`, `green-500` trong component.
- Component chỉ dùng semantic token: `primary`, `primary-soft`, `danger`, `success`, `warning`, `border`, `card`, `muted-foreground`.
