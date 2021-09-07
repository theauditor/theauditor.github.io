---
title: Monty Hall Search Optimization
desc: How to use the monty hall problems solution hack of changing decision after reveal to search unsorted lists faster.

---

_Disclaimer : What is described below is a proposal for a new concept and approach based on RANDOM thoughts and intuition and has OT been tested in any manner. The mathematical sensibility and feasibility of this method has not been thought over. Use with caution._

I know this sounds like the title of a _Big Bang Theory_ episode but I promise to not rant on like Sheldon does.

###### Objective

To use the probability variation observed in the _Monty Hall Problem_ to improve (or maybe make it worse) search efficiency in an unsorted list of unique values.

As we all know binary search helps us speed up our search process by many factors but there is little we can do when the list we are searching in is unsorted, often leaving us with no other option other than to sort the list first.

###### Overview Of The Monty Hall Observation/Problem

_Skip if you know what that Monty hall problem is ( is directly taken out of wikipedia)_

> The Monty Hall problem is a brain teaser, in the form of a probability puzzle (Gruber, Krauss and others), loosely based on the American television game show Let's Make a Deal and named after its original host, Monty Hall.

The problem goes like this -

> Suppose you're on a game show, and you're given the choice of three doors: Behind one door is a car; behind the others, goats. You pick a door, say No. 1, and the host, who knows what's behind the doors, opens another door, say No. 3, which has a goat. He then says to you, "Do you want to pick door No. 2?" Is it to your advantage to switch your choice?

Strangely it was noticed that if contestant switches his choice after one goat was revealed they tend to win the car.

Here is a [video](https://web.archive.org/web/20160808155557/https://www.youtube.com/watch?v=4Lb-6rxZxx0) in case you still have not got it.

The mathematical side of this is much discussed and debated on, however we would be only using this seen variation in chance for what we are going to do.

###### Approach

The following assumptions are made  
1\. The list we have has unique values.  
2\. The list is unsorted.  
3\. The list is in a situation where you don't want to sort it for the time being. (else who would not just sort it and use binary search).

Assume that we have a list **A** that has **L** number of words in it. the first step would be to segmentalize this list into three smaller units (**a1**, **a2** and **a3**) so that they have lengths (**l1**,**l2** and **l3**) where the smaller lengths **l**x are almost equal.

*   Now just like in the problem there are two segments that do not contain the word we are looking for and one which does.

*   We start by picking one of them at random. Let us assume **a2** is picked.

*   The next step would be to eliminate another segment that do not contain the word from the available segments. To do this we randomly select another segment between **a1** and **a3**. Assume we select **a3**.

*   To eliminate **a3** we parse through it. If the word is found we can end the search, else we eliminate **a3** from our usable segments.

*   If **a3** is eliminated we can now switch our choice from **a2** to **a1** and search the list for our word.

As per our understanding of the _Monty Hall Problem_ we know two out of three times we would succeed in detecting the word in either **a3** or **a1**.

###### Inference

Being too lazy to sort a list may produce a really stupid or genius (i really wish) idea that you can blog on after wasting few days obsessing over it.

PS: I should seriously get some sleep.