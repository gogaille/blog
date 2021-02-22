---
lang: "fr"
title: "Learn How to Pre-render Pages Using Static Generation with Next.js"
excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent elementum facilisis leo vel fringilla est ullamcorper eget. At imperdiet dui accumsan sit amet nulla facilities morbi tempus."
coverImage: "/assets/blog/hello-world/cover.jpg"
date: "2020-03-16T05:35:07.322Z"
author:
  name: Tim Neutkens
  picture: "/assets/blog/authors/tim.jpeg"
ogImage:
  url: "/assets/blog/hello-world/cover.jpg"
---

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent elementum facilisis leo vel fringilla est ullamcorper eget. At imperdiet dui accumsan sit amet nulla facilities morbi tempus. Praesent elementum facilisis leo vel fringilla. Congue mauris rhoncus aenean vel. Egestas sed tempus urna et pharetra pharetra massa massa ultricies.

```jsx
const Post = ({ post }: Props) => {
  return (
    <Layout>
      <Container>
        <Header />
        <article className="mb-32" lang={post.lang}>
          <Head>
            <title>
              {post.title} | {BLOG_TITLE}
            </title>
            <meta property="og:image" content={post.ogImage.url} />
          </Head>
          <PostHeader
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            readingTime={post.readingTime}
          />
          <PostBody content={post.content} />
        </article>
      </Container>
    </Layout>
  );
};
```

Venenatis cras sed felis eget velit. Consectetur libero id faucibus nisl tincidunt. Gravida in fermentum et sollicitudin ac orci phasellus egestas tellus. Volutpat consequat mauris nunc congue nisi vitae. Id aliquet risus feugiat in ante metus dictum at tempor. Sed blandit libero volutpat sed cras. Sed odio morbi quis commodo odio aenean sed adipiscing. Velit euismod in pellentesque massa placerat. Mi bibendum neque egestas congue quisque egestas diam in arcu. Nisi lacus sed viverra tellus in. Nibh cras pulvinar mattis nunc sed. Luctus accumsan tortor posuere ac ut consequat semper viverra. Fringilla ut morbi tincidunt augue interdum velit euismod.

```css
body {
  margin: 0;
  padding: 0;
}
```

## Lorem Ipsum

Tristique senectus et netus et malesuada fames ac turpis. Ridiculous mus mauris vitae ultricies leo integer malesuada nunc vel. In mollis nunc sed id semper. Egestas tellus rutrum tellus pellentesque. Phasellus vestibulum lorem sed risus ultricies tristique nulla. Quis blandit turpis cursus in hac habitasse platea dictumst quisque. Eros donec ac odio tempor orci dapibus ultrices. Aliquam sem et tortor consequat id porta nibh. Adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla. Diam vulputate ut pharetra sit amet. Ut tellus elementum sagittis vitae et leo. Arcu non odio euismod lacinia at quis risus sed vulputate.

```php
<?php
declare(strict_types=1);

namespace Gogaille\Upsell\Domain;

use ArrayIterator;
use IteratorAggregate;

/**
 * @implements IteratorAggregate<Upsell>
 */
class Upsells implements IteratorAggregate
{
    public function __construct(
        /** @var array<Upsell> */
        private array $upsells = [],
    ) {
    }

    /**
     * @param array<UserValue> $userValues
     */
    public function applyUserValues(array $userValues): self
    {
        return new self(
            array_map(
                function (Upsell $oneUpsell) use ($userValues): Upsell {
                    foreach ($userValues as $oneUserValue) {
                        if ($oneUpsell->is(new UpsellId($oneUserValue->getUpsellId()))) {
                            return $oneUpsell->selectValue($oneUserValue->getUserValue());
                        }
                    }

                    return $oneUpsell;
                },
                $this->upsells
            )
        );
    }

    /**
     * @return ArrayIterator<int, Upsell>
     */
    public function getIterator(): ArrayIterator
    {
        return new ArrayIterator($this->upsells);
    }

    /**
     * @return array<ReadModel\Upsell>
     */
    public function toReadModel(): array
    {
        return array_map(fn ($oneUpsell) => $oneUpsell->toReadModel(), $this->upsells);
    }

    /**
     * @return array<UserValue>
     */
    public function toUserValues(): array
    {
        return [...array_filter(
            array_map(
                fn (Upsell $oneUpsell) => $oneUpsell->toUserValue(),
                $this->upsells,
            ),
            fn ($oneUserValue) => null !== $oneUserValue
        )];
    }
}

```

Tristique senectus et netus et malesuada fames ac turpis. Ridiculous mus mauris vitae ultricies leo integer malesuada nunc vel. In mollis nunc sed id semper. Egestas tellus rutrum tellus pellentesque. Phasellus vestibulum lorem sed risus ultricies tristique nulla. Quis blandit turpis cursus in hac habitasse platea dictumst quisque. Eros donec ac odio tempor orci dapibus ultrices. Aliquam sem et tortor consequat id porta nibh. Adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla. Diam vulputate ut pharetra sit amet. Ut tellus elementum sagittis vitae et leo. Arcu non odio euismod lacinia at quis risus sed vulputate.
